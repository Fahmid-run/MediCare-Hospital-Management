import { useState, useMemo } from 'react';
import { Icon } from '../../components/Icon';
import { Input, Select } from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import Pagination from '../../components/ui/Pagination';
import { appointments } from '../../data/appointments';
import type { AppointmentStatus } from '../../data/appointments';
import { statusColors, formatDate } from '../../utils/helpers';

const statusFilters: (AppointmentStatus | 'All')[] = ['All', 'Booked', 'Confirmed', 'Pending', 'In Progress', 'Completed', 'Cancelled'];

export default function DoctorAppointments() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<AppointmentStatus | 'All'>('All');
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = useMemo(() => {
    return appointments.filter((a) => {
      if (search && !a.patientName.toLowerCase().includes(search.toLowerCase())) return false;
      if (status !== 'All' && a.status !== status) return false;
      return true;
    });
  }, [search, status]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Appointment Management</h2>
        <p className="text-slate-500 mt-1">Manage your patient appointments.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-4 flex flex-col sm:flex-row gap-3">
        <div className="flex-1"><Input placeholder="Search by patient name..." icon="Search" value={search} onChange={(e) => setSearch(e.target.value)} /></div>
        <Select value={status} onChange={(e) => setStatus(e.target.value as any)} className="sm:!w-48">
          {statusFilters.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
              <tr>
                <th className="text-left px-5 py-3 font-semibold">Patient</th>
                <th className="text-left px-3 py-3 font-semibold hidden sm:table-cell">Age/Gender</th>
                <th className="text-left px-3 py-3 font-semibold">Time</th>
                <th className="text-left px-3 py-3 font-semibold hidden lg:table-cell">Reason</th>
                <th className="text-left px-3 py-3 font-semibold">Status</th>
                <th className="text-right px-5 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {paged.map((a) => (
                <tr key={a.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2.5">
                      <Avatar src={`https://i.pravatar.cc/300?u=${a.patientId}`} name={a.patientName} size="sm" />
                      <div><p className="font-semibold text-slate-700">{a.patientName}</p><p className="text-xs text-slate-400">{formatDate(a.date)}</p></div>
                    </div>
                  </td>
                  <td className="px-3 py-3 hidden sm:table-cell text-slate-500">{a.patientAge}y / {a.patientGender}</td>
                  <td className="px-3 py-3 text-slate-600 font-medium">{a.time}</td>
                  <td className="px-3 py-3 hidden lg:table-cell text-slate-500 max-w-[200px] truncate">{a.reason}</td>
                  <td className="px-3 py-3"><Badge tone="neutral" className={statusColors[a.status]}>{a.status}</Badge></td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      {a.status === 'Pending' && (
                        <>
                          <button className="p-1.5 rounded-lg text-success-600 hover:bg-success-50" title="Accept"><Icon.Check size={16} /></button>
                          <button className="p-1.5 rounded-lg text-danger-600 hover:bg-danger-50" title="Reject"><Icon.X size={16} /></button>
                        </>
                      )}
                      {a.status === 'Confirmed' && <button className="p-1.5 rounded-lg text-primary-600 hover:bg-primary-50" title="Complete"><Icon.CheckCircle size={16} /></button>}
                      <button className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100" title="View"><Icon.Eye size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-slate-50 text-xs text-slate-400">{filtered.length} appointments</div>
      </Card>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
