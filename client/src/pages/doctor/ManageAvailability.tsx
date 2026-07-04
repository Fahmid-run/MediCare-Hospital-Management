import { useState } from 'react';
import { Icon } from '../../components/Icon';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { cn } from '../../utils/helpers';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const periods = ['morning', 'afternoon', 'evening'] as const;

export default function ManageAvailability() {
  const [schedule, setSchedule] = useState<Record<string, { available: boolean; slots: Record<string, boolean> }>>(
    Object.fromEntries(days.map((d) => [d, { available: d !== 'Fri', slots: Object.fromEntries(periods.map((p) => [p, d !== 'Fri' && !(d === 'Tue' && p === 'afternoon')])) }])),
  );

  const toggleDay = (day: string) => setSchedule({ ...schedule, [day]: { ...schedule[day], available: !schedule[day].available } });
  const toggleSlot = (day: string, period: string) => setSchedule({ ...schedule, [day]: { ...schedule[day], slots: { ...schedule[day].slots, [period]: !schedule[day].slots[period] } } });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manage Availability</h2>
          <p className="text-slate-500 mt-1">Set your weekly schedule and time slots.</p>
        </div>
        <Button><Icon.Check size={18} /> Save Schedule</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {days.map((day) => (
          <Card key={day} className={cn('p-5', !schedule[day].available && 'opacity-60')}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800">{day}</h3>
              <button
                onClick={() => toggleDay(day)}
                className={cn('relative w-11 h-6 rounded-full transition-colors', schedule[day].available ? 'bg-primary-600' : 'bg-slate-300')}
              >
                <span className={cn('absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform', schedule[day].available ? 'translate-x-5' : 'translate-x-0.5')} />
              </button>
            </div>
            <div className="space-y-2">
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => schedule[day].available && toggleSlot(day, p)}
                  disabled={!schedule[day].available}
                  className={cn('w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all',
                    schedule[day].slots[p] ? 'bg-success-50 text-success-700 border border-success-200' : 'bg-slate-50 text-slate-400 border border-slate-100')}
                >
                  <span className="flex items-center gap-2 capitalize">
                    {p === 'morning' && <Icon.Sun size={15} />}
                    {p === 'afternoon' && <Icon.Sun size={15} />}
                    {p === 'evening' && <Icon.Moon size={15} />}
                    {p}
                  </span>
                  {schedule[day].slots[p] ? <Icon.Check size={16} /> : <Icon.X size={16} />}
                </button>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
