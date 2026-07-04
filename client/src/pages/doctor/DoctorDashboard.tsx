import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import StatsCard from '../../components/ui/StatsCard';
import Card from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import ReviewCard from '../../components/ReviewCard';
import { appointments } from '../../data/appointments';
import { reviews } from '../../data/reviews';
import { doctors } from '../../data/doctors';
import { formatDate, formatCurrency } from '../../utils/helpers';

export default function DoctorDashboard() {
  const doctor = doctors[0];
  const todayAppts = appointments.filter((a) => a.doctorId === 'd1').slice(0, 4);
  const upcoming = appointments.filter((a) => a.doctorId === 'd1' && ['Confirmed', 'Booked', 'Pending'].includes(a.status)).slice(0, 4);
  const completed = appointments.filter((a) => a.doctorId === 'd1' && a.status === 'Completed');
  const revenue = completed.reduce((sum, a) => sum + a.fee, 0) + 18500;
  const myReviews = reviews.filter((r) => r.doctorId === 'd1').slice(0, 2);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Good morning, Dr. Sarah!</h2>
          <p className="text-slate-500 mt-1">You have {todayAppts.length} appointments today.</p>
        </div>
        <Link to="/doctor/prescription"><Button><Icon.Plus size={18} /> Write Prescription</Button></Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Today's Appointments" value={todayAppts.length} icon="Calendar" tone="primary" />
        <StatsCard label="Completed" value={completed.length} icon="CheckCircle" tone="success" />
        <StatsCard label="Revenue" value={formatCurrency(revenue)} icon="DollarSign" tone="warning" />
        <StatsCard label="Rating" value={doctor.rating} icon="Star" tone="info" />
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-6">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800">Today's Appointments</h3>
              <Link to="/doctor/appointments"><Button variant="ghost" size="sm">Manage <Icon.ArrowRight size={16} /></Button></Link>
            </div>
            <div className="space-y-3">
              {todayAppts.map((a) => (
                <div key={a.id} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <Avatar src={`https://i.pravatar.cc/300?u=${a.patientId}`} name={a.patientName} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-700 text-sm">{a.patientName}</p>
                    <p className="text-xs text-slate-400">{a.time} • {a.reason}</p>
                  </div>
                  <Badge tone={a.status === 'Confirmed' ? 'success' : a.status === 'Pending' ? 'warning' : 'primary'}>{a.status}</Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-bold text-slate-800 mb-4">Upcoming Patients</h3>
            <div className="space-y-3">
              {upcoming.map((a) => (
                <div key={a.id} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100">
                  <Avatar src={`https://i.pravatar.cc/300?u=${a.patientId}`} name={a.patientName} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-700 text-sm">{a.patientName}</p>
                    <p className="text-xs text-slate-400">{formatDate(a.date)} • {a.time}</p>
                  </div>
                  <Button variant="ghost" size="sm"><Icon.Eye size={16} /></Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-5 bg-gradient-to-br from-success-500 to-success-700 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-success-100 text-sm">Total Revenue</p>
                <p className="text-3xl font-bold mt-1">{formatCurrency(revenue)}</p>
                <p className="text-success-100 text-xs mt-1">↑ 12% from last month</p>
              </div>
              <Icon.DollarSign size={40} className="text-white/30" />
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-bold text-slate-800 mb-3">Recent Reviews</h3>
            <div className="space-y-3">
              {myReviews.map((r) => <ReviewCard key={r.id} review={r} />)}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
