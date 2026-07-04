import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { Input } from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Breadcrumb from '../components/ui/Misc';
import { EmptyState } from '../components/ui/Misc';
import { trackAppointment } from '../data/appointments';
import { cn, formatCurrency, formatDate } from '../utils/helpers';

export default function TrackAppointment() {
  const [params] = useSearchParams();
  const [trackingId, setTrackingId] = useState(params.get('id') || '');
  const [searched, setSearched] = useState(!!params.get('id'));
  const [result, setResult] = useState(params.get('id') ? trackAppointment : null);

  const handleSearch = () => {
    setSearched(true);
    if (trackingId.trim()) {
      setResult({ ...trackAppointment, trackingId });
    } else {
      setResult(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Track Appointment' }]} className="mb-4" />
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Track Your Appointment</h1>
      <p className="text-slate-500 mb-6">Enter your tracking ID to see the real-time status of your appointment.</p>

      <Card className="p-5 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <Input placeholder="e.g. TRK-2024-001" icon="Search" value={trackingId} onChange={(e) => setTrackingId(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} />
          </div>
          <Button onClick={handleSearch} size="md"><Icon.Search size={18} /> Track Now</Button>
        </div>
        <p className="text-xs text-slate-400 mt-2">Tip: Try <button onClick={() => { setTrackingId('TRK-2024-001'); handleSearch(); }} className="text-primary-600 hover:underline font-mono">TRK-2024-001</button></p>
      </Card>

      {searched && !result && (
        <Card><EmptyState icon="Search" title="No appointment found" description="Please check your tracking ID and try again." /></Card>
      )}

      {result && (
        <div className="space-y-6 animate-fade-in">
          {/* Timeline */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-slate-800">Appointment Timeline</h2>
              <Badge tone="primary" dot>In Progress</Badge>
            </div>
            <div className="relative">
              {result.timeline.map((t, i) => (
                <div key={i} className="flex gap-4 pb-8 last:pb-0 relative">
                  {i < result.timeline.length - 1 && (
                    <div className={cn('absolute left-[18px] top-9 bottom-0 w-0.5', t.completed ? 'bg-success-500' : 'bg-slate-200')} />
                  )}
                  <div className={cn('relative z-10 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0',
                    t.completed ? 'bg-success-500 text-white' : 'bg-slate-100 text-slate-400')}>
                    {t.completed ? <Icon.Check size={18} /> : <Icon.Clock size={18} />}
                  </div>
                  <div className="pt-1">
                    <p className={cn('font-semibold', t.completed ? 'text-slate-800' : 'text-slate-400')}>{t.status}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{t.date}</p>
                    <p className="text-sm text-slate-500 mt-1">{t.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Details */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-5">
              <h3 className="font-bold text-slate-800 mb-4">Appointment Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">Tracking ID</span><span className="font-mono font-semibold text-slate-700">{result.trackingId}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Appointment ID</span><span className="font-mono font-semibold text-slate-700">{result.appointmentId}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Date</span><span className="font-semibold text-slate-700">{formatDate(result.date)}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Time</span><span className="font-semibold text-slate-700">{result.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Fee</span><span className="font-semibold text-slate-700">{formatCurrency(result.fee)}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Payment</span><Badge tone="success">Paid</Badge></div>
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold text-slate-800 mb-4">Doctor & Location</h3>
              <div className="flex items-center gap-3 mb-4">
                <Avatar src={result.doctorPhoto} name={result.doctorName} size="md" ring />
                <div>
                  <p className="font-semibold text-slate-800">{result.doctorName}</p>
                  <p className="text-sm text-primary-600">{result.doctorSpecialization}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-slate-500"><Icon.Building size={16} className="text-slate-400 mt-0.5" /> {result.hospital}</div>
                <div className="flex items-start gap-2 text-slate-500"><Icon.MapPin size={16} className="text-slate-400 mt-0.5" /> {result.hospitalAddress}</div>
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold text-slate-800 mb-4">Patient Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">Name</span><span className="font-semibold text-slate-700">{result.patientName}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Age</span><span className="font-semibold text-slate-700">{result.patientAge} years</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Gender</span><span className="font-semibold text-slate-700">{result.patientGender}</span></div>
                <div className="pt-2 border-t border-slate-50"><span className="text-slate-400 text-xs">Reason</span><p className="text-slate-600 mt-1">{result.reason}</p></div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
