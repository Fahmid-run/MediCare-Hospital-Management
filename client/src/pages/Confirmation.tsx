import { useLocation, Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { formatCurrency } from '../utils/helpers';

export default function Confirmation() {
  const location = useLocation();
  const data = (location.state as any) || { doctor: 'Dr. Sarah Mitchell', specialization: 'Cardiologist', hospital: 'Apollo Heart Institute', date: '2024-12-15', time: '10:00 AM', total: 1550, method: 'Card' };
  const appointmentId = 'APT-' + Math.floor(100000 + Math.random() * 900000);
  const trackingId = 'TRK-2024-' + Math.floor(100 + Math.random() * 900);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <div className="w-20 h-20 rounded-full bg-success-100 text-success-600 flex items-center justify-center mx-auto mb-5 animate-scale-in">
          <Icon.CheckCircle size={44} />
        </div>
        <h1 className="text-3xl font-bold text-slate-800">Appointment Confirmed!</h1>
        <p className="text-slate-500 mt-2">Your appointment has been successfully booked. We've sent a confirmation to your phone.</p>
      </div>

      <Card className="p-6 mb-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-primary-50">
            <p className="text-xs text-slate-400 uppercase tracking-wide">Appointment ID</p>
            <p className="text-lg font-bold text-primary-700 font-mono mt-1">{appointmentId}</p>
          </div>
          <div className="p-4 rounded-xl bg-success-50">
            <p className="text-xs text-slate-400 uppercase tracking-wide">Tracking ID</p>
            <p className="text-lg font-bold text-success-700 font-mono mt-1">{trackingId}</p>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
            <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center"><Icon.Stethoscope size={20} /></div>
            <div><p className="text-xs text-slate-400">Doctor</p><p className="font-semibold text-slate-700">{data.doctor} • {data.specialization}</p></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center"><Icon.Calendar size={20} /></div>
              <div><p className="text-xs text-slate-400">Date & Time</p><p className="font-semibold text-slate-700">{data.date} • {data.time}</p></div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center"><Icon.MapPin size={20} /></div>
              <div><p className="text-xs text-slate-400">Location</p><p className="font-semibold text-slate-700">{data.hospital}</p></div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2 text-slate-500 text-sm"><Icon.CreditCard size={18} /> Payment via {data.method}</div>
            <span className="font-bold text-slate-800">{formatCurrency(data.total)}</span>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap justify-center gap-3">
        <Button variant="outline"><Icon.Download size={18} /> Download Invoice</Button>
        <Link to={`/track?id=${trackingId}`}><Button><Icon.Activity size={18} /> Track Appointment</Button></Link>
        <Link to="/"><Button variant="ghost"><Icon.Home size={18} /> Back Home</Button></Link>
      </div>
    </div>
  );
}
