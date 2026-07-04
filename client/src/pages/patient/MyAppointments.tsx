import { useState, useMemo } from 'react';
import { Input, Select } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import AppointmentCard from '../../components/AppointmentCard';
import Pagination from '../../components/ui/Pagination';
import { EmptyState } from '../../components/ui/Misc';
import { appointments } from '../../data/appointments';
import type { AppointmentStatus } from '../../data/appointments';

const statusFilters: (AppointmentStatus | 'All')[] = ['All', 'Booked', 'Confirmed', 'Pending', 'In Progress', 'Completed', 'Cancelled'];

export default function MyAppointments() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<AppointmentStatus | 'All'>('All');
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filtered = useMemo(() => {
    return appointments.filter((a) => {
      if (a.patientId !== 'p1') return false;
      if (status !== 'All' && a.status !== status) return false;
      if (search && !a.doctorName.toLowerCase().includes(search.toLowerCase()) && !a.trackingId.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [search, status]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">My Appointments</h2>
        <p className="text-slate-500 mt-1">Manage all your appointments in one place.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-4 flex flex-col sm:flex-row gap-3">
        <div className="flex-1"><Input placeholder="Search by doctor or tracking ID..." icon="Search" value={search} onChange={(e) => setSearch(e.target.value)} /></div>
        <Select value={status} onChange={(e) => setStatus(e.target.value as any)} className="sm:!w-48">
          {statusFilters.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
      </div>

      {paged.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-card border border-slate-100"><EmptyState icon="Calendar" title="No appointments found" description="Try adjusting your filters or book a new appointment." action={<Button>Book Appointment</Button>} /></div>
      ) : (
        <>
          <div className="space-y-4">{paged.map((a) => <AppointmentCard key={a.id} appointment={a} />)}</div>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </div>
  );
}
