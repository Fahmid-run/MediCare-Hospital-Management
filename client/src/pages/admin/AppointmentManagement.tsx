import { useState, useMemo } from 'react';
import { Icon } from '../../components/Icon';
import { Input, Select } from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Pagination from '../../components/ui/Pagination';
import { appointments } from '../../data/appointments';
import type { AppointmentStatus } from '../../data/appointments';
import { statusColors, statusDot, formatDate, formatCurrency } from '../../utils/helpers';

const statusFilters: (AppointmentStatus | 'All')[] = ['All', 'Booked', 'Confirmed', 'Pending', 'In Progress', 'Completed', 'Cancelled'];

export default function AppointmentManagement() {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<AppointmentStatus | 'All'>('All');
  const [page, setPage] = useState(1);
  const perPage = 8;

  const filtered = useMemo(() => appointments.filter((a) => {
    if (status !== 'All' && a.status !== status) return false;
    if (search && !a.patientName.toLowerCase().includes(search.toLowerCase()) && !a.doctorName.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }), [search, status]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  // Calendar
  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const calCells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Appointment Management</h2>
          <p className="text-slate-500 mt-1">View and manage all platform appointments.</p>
        </div>
        <div className="flex gap-2">
          <div className="flex bg-slate-100 rounded-xl p-1">
            <button onClick={() => setView('list')} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${view === 'list' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500'}`}><Icon.List size={16} /></button>
            <button onClick={() => setView('calendar')} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${view === 'calendar' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500'}`}><Icon.Calendar size={16} /></button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-4 flex flex-col sm:flex-row gap-3">
        <div className="flex-1"><Input placeholder="Search by patient or doctor..." icon="Search" value={search} onChange={(e) => setSearch(e.target.value)} /></div>
        <Select value={status} onChange={(e) => setStatus(e.target.value as any)} className="sm:!w-44">
          {statusFilters.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
      </div>

      {view === 'list' ? (
        <>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Appointment</th>
                    <th className="text-left px-3 py-3 font-semibold hidden sm:table-cell">Patient</th>
                    <th className="text-left px-3 py-3 font-semibold hidden md:table-cell">Doctor</th>
                    <th className="text-left px-3 py-3 font-semibold">Date/Time</th>
                    <th className="text-left px-3 py-3 font-semibold">Status</th>
                    <th className="text-left px-3 py-3 font-semibold hidden lg:table-cell">Fee</th>
                    <th className="text-right px-5 py-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {paged.map((a) => (
                    <tr key={a.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-5 py-3"><p className="font-mono font-semibold text-slate-700 text-xs">{a.id}</p><p className="text-xs text-slate-400">{a.trackingId}</p></td>
                      <td className="px-3 py-3 hidden sm:table-cell text-slate-600">{a.patientName}</td>
                      <td className="px-3 py-3 hidden md:table-cell text-slate-600">{a.doctorName}</td>
                      <td className="px-3 py-3 text-slate-600"><p>{formatDate(a.date)}</p><p className="text-xs text-slate-400">{a.time}</p></td>
                      <td className="px-3 py-3"><Badge tone="neutral" className={statusColors[a.status]}><span className={`w-1.5 h-1.5 rounded-full ${statusDot[a.status]}`} />{a.status}</Badge></td>
                      <td className="px-3 py-3 hidden lg:table-cell text-slate-600 font-medium">{formatCurrency(a.fee)}</td>
                      <td className="px-5 py-3 text-right"><button className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"><Icon.Eye size={16} /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      ) : (
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => { if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); } else setCalMonth(calMonth - 1); }} className="p-1.5 rounded-lg hover:bg-slate-100"><Icon.ChevronLeft size={20} /></button>
            <span className="font-semibold text-slate-700">{new Date(calYear, calMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            <button onClick={() => { if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); } else setCalMonth(calMonth + 1); }} className="p-1.5 rounded-lg hover:bg-slate-100"><Icon.ChevronRight size={20} /></button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-400 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => <div key={d} className="py-2 font-semibold">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {calCells.map((day, i) => {
              if (!day) return <div key={i} className="aspect-square" />;
              const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const dayAppts = appointments.filter((a) => a.date === dateStr);
              return (
                <div key={i} className="aspect-square rounded-lg border border-slate-100 p-1 hover:bg-slate-50 transition-colors">
                  <p className="text-xs font-medium text-slate-600">{day}</p>
                  <div className="mt-1 space-y-0.5">
                    {dayAppts.slice(0, 2).map((a) => (
                      <div key={a.id} className={`text-[9px] px-1 py-0.5 rounded ${statusColors[a.status]} truncate`}>{a.patientName}</div>
                    ))}
                    {dayAppts.length > 2 && <p className="text-[9px] text-slate-400">+{dayAppts.length - 2} more</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
}
