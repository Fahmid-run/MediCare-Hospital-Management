import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import StatsCard from '../../components/ui/StatsCard';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Avatar from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import { doctors } from '../../data/doctors';
import { patients } from '../../data/patients';
import { appointments } from '../../data/appointments';
import { reviews } from '../../data/reviews';
import { invoices } from '../../data/invoices';
import { statusColors, formatCurrency, formatDate } from '../../utils/helpers';

export default function AdminDashboard() {
  const totalRevenue = invoices.filter((i) => i.status === 'Paid').reduce((s, i) => s + i.total, 0) + 48200;
  const pendingReqs = appointments.filter((a) => a.status === 'Pending').length;
  const recentAppts = appointments.slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Admin Overview</h2>
        <p className="text-slate-500 mt-1">Platform-wide statistics and recent activity.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Total Doctors" value={doctors.length} icon="Stethoscope" tone="primary" trend={{ value: '8%', up: true }} />
        <StatsCard label="Total Patients" value={patients.length + 1245} icon="Users" tone="success" trend={{ value: '12%', up: true }} />
        <StatsCard label="Appointments" value={appointments.length + 320} icon="CalendarCheck" tone="warning" trend={{ value: '5%', up: true }} />
        <StatsCard label="Revenue" value={formatCurrency(totalRevenue)} icon="DollarSign" tone="info" trend={{ value: '15%', up: true }} />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Reviews" value={reviews.length + 89} icon="Star" tone="primary" />
        <StatsCard label="Pending Requests" value={pendingReqs} icon="Clock" tone="warning" />
        <StatsCard label="Hospitals" value="25" icon="Building" tone="success" />
        <StatsCard label="Active Users" value="1,847" icon="Activity" tone="info" />
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* Chart placeholders */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800">Revenue Overview</h3>
              <Badge tone="success">↑ 15% growth</Badge>
            </div>
            <div className="flex items-end justify-between gap-2 h-48 pt-4">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((m, i) => (
                <div key={m} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg transition-all hover:opacity-80" style={{ height: `${30 + (i * 12) % 70}%` }} />
                  <span className="text-xs text-slate-400">{m}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4">Appointment Distribution</h3>
            <div className="space-y-3">
              {[
                { label: 'Completed', value: 65, tone: 'bg-success-500' },
                { label: 'Confirmed', value: 20, tone: 'bg-primary-500' },
                { label: 'Pending', value: 10, tone: 'bg-amber-500' },
                { label: 'Cancelled', value: 5, tone: 'bg-danger-500' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm mb-1"><span className="text-slate-600">{s.label}</span><span className="font-semibold text-slate-700">{s.value}%</span></div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden"><div className={s.tone} style={{ width: `${s.value}%` }} /></div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800">Recent Appointments</h3>
              <Link to="/admin/appointments"><Button variant="ghost" size="sm">All</Button></Link>
            </div>
            <div className="space-y-3">
              {recentAppts.map((a) => (
                <div key={a.id} className="flex items-center gap-2.5">
                  <Avatar src={a.doctorPhoto} name={a.doctorName} size="xs" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-700 truncate">{a.patientName}</p>
                    <p className="text-xs text-slate-400">{formatDate(a.date)}</p>
                  </div>
                  <Badge tone="neutral" className={statusColors[a.status]}>{a.status}</Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
            <Icon.TrendingUp size={28} className="mb-2" />
            <h3 className="font-bold">Platform Growth</h3>
            <p className="text-sm text-primary-100 mt-1">User registrations up 23% this month. Keep promoting the platform!</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
