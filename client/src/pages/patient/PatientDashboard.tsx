import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import StatsCard from '../../components/ui/StatsCard';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import AppointmentCard from '../../components/AppointmentCard';
import { appointments } from '../../data/appointments';
import { prescriptions } from '../../data/prescriptions';
import { formatDate } from '../../utils/helpers';

export default function PatientDashboard() {
  const myAppointments = appointments.filter((a) => a.patientId === 'p1');
  const upcoming = myAppointments.filter((a) => ['Booked', 'Confirmed', 'Pending', 'Doctor Assigned', 'In Progress'].includes(a.status));
  const completed = myAppointments.filter((a) => a.status === 'Completed');
  const cancelled = myAppointments.filter((a) => a.status === 'Cancelled');
  const pending = myAppointments.filter((a) => a.status === 'Pending');
  const recent = myAppointments.slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Welcome back, John! 👋</h2>
        <p className="text-slate-500 mt-1">Here's an overview of your health appointments.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Upcoming" value={upcoming.length} icon="CalendarCheck" tone="primary" />
        <StatsCard label="Completed" value={completed.length} icon="CheckCircle" tone="success" />
        <StatsCard label="Cancelled" value={cancelled.length} icon="XCircle" tone="danger" />
        <StatsCard label="Pending" value={pending.length} icon="Clock" tone="warning" />
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-800">Recent Appointments</h3>
            <Link to="/dashboard/appointments"><Button variant="ghost" size="sm">View All <Icon.ArrowRight size={16} /></Button></Link>
          </div>
          <div className="space-y-4">
            {recent.map((a) => <AppointmentCard key={a.id} appointment={a} compact />)}
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-5">
            <h3 className="font-bold text-slate-800 mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/book"><Button variant="secondary" size="sm" fullWidth><Icon.Plus size={16} /> Book</Button></Link>
              <Link to="/track"><Button variant="secondary" size="sm" fullWidth><Icon.Search size={16} /> Track</Button></Link>
              <Link to="/dashboard/prescriptions"><Button variant="secondary" size="sm" fullWidth><Icon.FileText size={16} /> Rx</Button></Link>
              <Link to="/dashboard/invoices"><Button variant="secondary" size="sm" fullWidth><Icon.CreditCard size={16} /> Invoices</Button></Link>
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-bold text-slate-800 mb-3">Recent Prescriptions</h3>
            <div className="space-y-3">
              {prescriptions.slice(0, 2).map((p) => (
                <div key={p.id} className="p-3 rounded-xl bg-slate-50">
                  <p className="font-semibold text-slate-700 text-sm">{p.id}</p>
                  <p className="text-xs text-slate-400">{p.doctorName} • {formatDate(p.date)}</p>
                  <p className="text-xs text-slate-500 mt-1">{p.diagnosis}</p>
                </div>
              ))}
            </div>
            <Link to="/dashboard/prescriptions"><Button variant="ghost" size="sm" fullWidth className="mt-3">View All</Button></Link>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
            <Icon.HeartPulse size={28} className="mb-2" />
            <h3 className="font-bold">Health Tip</h3>
            <p className="text-sm text-primary-100 mt-1">Keep your blood pressure in check. Monitor daily and maintain a low-sodium diet.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
