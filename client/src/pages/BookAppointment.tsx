import { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { Input, Select, Textarea } from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Breadcrumb from '../components/ui/Misc';
import { doctors } from '../data/doctors';
import { cn, formatCurrency } from '../utils/helpers';

const steps = ['Choose Doctor', 'Select Date', 'Time Slot', 'Patient Info', 'Summary'];

export default function BookAppointment() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const preselected = params.get('doctor');
  const [step, setStep] = useState(0);
  const [doctorId, setDoctorId] = useState(preselected || '');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [slotPeriod, setSlotPeriod] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const [info, setInfo] = useState({ name: '', phone: '', age: '', gender: '', reason: '' });

  const doctor = doctors.find((d) => d.id === doctorId);
  const platformFee = 50;
  const total = (doctor?.consultationFee || 0) + platformFee;

  const canProceed = () => {
    if (step === 0) return !!doctorId;
    if (step === 1) return !!date;
    if (step === 2) return !!slot;
    if (step === 3) return info.name && info.phone && info.age && info.gender;
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const proceed = () => {
    navigate('/payment', {
      state: {
        doctor: doctor?.name, specialization: doctor?.specialization, hospital: doctor?.hospital,
        date, time: slot, fee: doctor?.consultationFee, platformFee, total,
        patient: info,
      },
    });
  };

  // Calendar generation
  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const calCells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Book Appointment' }]} className="mb-4" />
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Book an Appointment</h1>

      {/* Stepper */}
      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-5 mb-6">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <div className={cn('w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all',
                  i < step ? 'bg-success-500 text-white' : i === step ? 'bg-primary-600 text-white ring-4 ring-primary-100' : 'bg-slate-100 text-slate-400')}>
                  {i < step ? <Icon.Check size={18} /> : i + 1}
                </div>
                <span className={cn('text-xs font-medium hidden sm:block', i <= step ? 'text-slate-700' : 'text-slate-400')}>{s}</span>
              </div>
              {i < steps.length - 1 && <div className={cn('flex-1 h-0.5 mx-2 rounded-full', i < step ? 'bg-success-500' : 'bg-slate-200')} />}
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-6">
        <Card className="p-6">
          {/* Step 0: Choose Doctor */}
          {step === 0 && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Choose Your Doctor</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {doctors.map((d) => (
                  <button key={d.id} onClick={() => setDoctorId(d.id)} className={cn('flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all',
                    doctorId === d.id ? 'border-primary-500 bg-primary-50' : 'border-slate-100 hover:border-slate-200')}>
                    <Avatar src={d.photo} name={d.name} size="md" />
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-800 text-sm truncate">{d.name}</p>
                      <p className="text-xs text-primary-600">{d.specialization}</p>
                      <p className="text-xs text-slate-400">{formatCurrency(d.consultationFee)}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Select Date */}
          {step === 1 && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Select a Date</h2>
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => { if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); } else setCalMonth(calMonth - 1); }} className="p-1.5 rounded-lg hover:bg-slate-100"><Icon.ChevronLeft size={20} /></button>
                  <span className="font-semibold text-slate-700">{new Date(calYear, calMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  <button onClick={() => { if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); } else setCalMonth(calMonth + 1); }} className="p-1.5 rounded-lg hover:bg-slate-100"><Icon.ChevronRight size={20} /></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-400 mb-2">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => <div key={d} className="py-1">{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calCells.map((day, i) => {
                    if (!day) return <div key={i} />;
                    const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const isToday = day === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear();
                    const isSelected = date === dateStr;
                    return (
                      <button key={i} onClick={() => setDate(dateStr)} className={cn('aspect-square rounded-lg text-sm font-medium transition-all',
                        isSelected ? 'bg-primary-600 text-white' : isToday ? 'bg-primary-50 text-primary-700 ring-1 ring-primary-200' : 'hover:bg-slate-100 text-slate-700')}>
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
              {date && <p className="mt-3 text-sm text-slate-600">Selected: <span className="font-semibold text-primary-600">{new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span></p>}
            </div>
          )}

          {/* Step 2: Time Slot */}
          {step === 2 && doctor && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Choose a Time Slot</h2>
              <div className="flex gap-2 mb-5">
                {(['morning', 'afternoon', 'evening'] as const).map((p) => (
                  <button key={p} onClick={() => setSlotPeriod(p)} className={cn('flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all',
                    slotPeriod === p ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>
                    {p === 'morning' && <Icon.Sun size={16} />}
                    {p === 'afternoon' && <Icon.Sun size={16} />}
                    {p === 'evening' && <Icon.Moon size={16} />}
                    {p}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {doctor.slots[slotPeriod].map((s) => (
                  <button key={s} onClick={() => setSlot(s)} className={cn('px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all',
                    slot === s ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-slate-100 text-slate-600 hover:border-slate-300')}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Patient Info */}
          {step === 3 && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Patient Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Full Name" placeholder="Enter patient name" value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} />
                <Input label="Phone Number" placeholder="+880 1XXX-XXXXXX" icon="Phone" value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} />
                <Input label="Age" type="number" placeholder="Age" value={info.age} onChange={(e) => setInfo({ ...info, age: e.target.value })} />
                <Select label="Gender" value={info.gender} onChange={(e) => setInfo({ ...info, gender: e.target.value })}>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Select>
                <div className="sm:col-span-2">
                  <Textarea label="Reason for Visit" rows={3} placeholder="Describe your symptoms or reason for appointment..." value={info.reason} onChange={(e) => setInfo({ ...info, reason: e.target.value })} />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Summary */}
          {step === 4 && doctor && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Appointment Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50">
                  <Avatar src={doctor.photo} name={doctor.name} size="lg" />
                  <div>
                    <p className="font-bold text-slate-800">{doctor.name}</p>
                    <p className="text-sm text-primary-600">{doctor.specialization}</p>
                    <p className="text-xs text-slate-400">{doctor.hospital}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded-xl bg-slate-50"><p className="text-xs text-slate-400">Date</p><p className="font-semibold text-slate-700">{date}</p></div>
                  <div className="p-3 rounded-xl bg-slate-50"><p className="text-xs text-slate-400">Time</p><p className="font-semibold text-slate-700">{slot}</p></div>
                  <div className="p-3 rounded-xl bg-slate-50"><p className="text-xs text-slate-400">Patient</p><p className="font-semibold text-slate-700">{info.name}</p></div>
                  <div className="p-3 rounded-xl bg-slate-50"><p className="text-xs text-slate-400">Phone</p><p className="font-semibold text-slate-700">{info.phone}</p></div>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 space-y-2">
                  <div className="flex justify-between text-sm text-slate-500"><span>Consultation Fee</span><span>{formatCurrency(doctor.consultationFee)}</span></div>
                  <div className="flex justify-between text-sm text-slate-500"><span>Platform Fee</span><span>{formatCurrency(platformFee)}</span></div>
                  <div className="flex justify-between font-bold text-slate-800 pt-2 border-t border-slate-100"><span>Total</span><span>{formatCurrency(total)}</span></div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6 pt-5 border-t border-slate-100">
            {step > 0 ? <Button variant="ghost" onClick={prev}><Icon.ArrowLeft size={18} /> Back</Button> : <span />}
            {step < 4 ? (
              <Button onClick={next} disabled={!canProceed()}>Continue <Icon.ArrowRight size={18} /></Button>
            ) : (
              <Button onClick={proceed}><Icon.CreditCard size={18} /> Proceed to Payment</Button>
            )}
          </div>
        </Card>

        {/* Sidebar Summary */}
        <div>
          <Card className="p-5 sticky top-20">
            <h3 className="font-bold text-slate-800 mb-3">Booking Summary</h3>
            {doctor ? (
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-50">
                  <Avatar src={doctor.photo} name={doctor.name} size="sm" />
                  <div><p className="font-semibold text-slate-700">{doctor.name}</p><p className="text-xs text-slate-400">{doctor.specialization}</p></div>
                </div>
                <div className="flex justify-between"><span className="text-slate-400">Date</span><span className="font-medium text-slate-700">{date || '—'}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Time</span><span className="font-medium text-slate-700">{slot || '—'}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Patient</span><span className="font-medium text-slate-700">{info.name || '—'}</span></div>
                <div className="flex justify-between pt-3 border-t border-slate-50"><span className="font-bold text-slate-800">Total</span><span className="font-bold text-primary-600">{formatCurrency(total)}</span></div>
              </div>
            ) : <p className="text-sm text-slate-400">Select a doctor to see summary.</p>}
            <Link to="/doctors" className="block mt-4"><Button variant="ghost" size="sm" fullWidth>Browse Doctors</Button></Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
