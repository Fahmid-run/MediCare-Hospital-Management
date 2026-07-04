import { Link } from 'react-router-dom';
import type { Appointment } from '../data/appointments';
import { Icon } from './Icon';
import Avatar from './ui/Avatar';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { statusColors, statusDot, formatDate, formatCurrency } from '../utils/helpers';

interface AppointmentCardProps {
  appointment: Appointment;
  showActions?: boolean;
  compact?: boolean;
}

export default function AppointmentCard({ appointment, showActions = true, compact }: AppointmentCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-5 card-hover">
      <div className="flex items-start gap-4">
        <Avatar src={appointment.doctorPhoto} name={appointment.doctorName} size="lg" ring />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-bold text-slate-800 truncate">{appointment.doctorName}</h3>
              <p className="text-sm text-primary-600">{appointment.doctorSpecialization}</p>
            </div>
            <Badge tone="neutral" className={statusColors[appointment.status]}>
              <span className={`w-1.5 h-1.5 rounded-full ${statusDot[appointment.status]}`} />
              {appointment.status}
            </Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">{appointment.hospital}</p>
        </div>
      </div>

      <div className={`grid ${compact ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'} gap-3 mt-4 pt-4 border-t border-slate-50`}>
        <div>
          <p className="text-[11px] text-slate-400 uppercase tracking-wide">Date</p>
          <p className="text-sm font-semibold text-slate-700 mt-0.5">{formatDate(appointment.date)}</p>
        </div>
        <div>
          <p className="text-[11px] text-slate-400 uppercase tracking-wide">Time</p>
          <p className="text-sm font-semibold text-slate-700 mt-0.5">{appointment.time}</p>
        </div>
        <div>
          <p className="text-[11px] text-slate-400 uppercase tracking-wide">Fee</p>
          <p className="text-sm font-semibold text-slate-700 mt-0.5">{formatCurrency(appointment.fee)}</p>
        </div>
        <div>
          <p className="text-[11px] text-slate-400 uppercase tracking-wide">Payment</p>
          <p className="text-sm font-semibold mt-0.5">
            <Badge tone={appointment.paymentStatus === 'Paid' ? 'success' : 'warning'}>{appointment.paymentStatus}</Badge>
          </p>
        </div>
      </div>

      {!compact && (
        <div className="mt-3 pt-3 border-t border-slate-50">
          <p className="text-xs text-slate-500">
            <span className="text-slate-400">Reason: </span>{appointment.reason}
          </p>
          <p className="text-xs text-slate-400 mt-1">Tracking ID: <span className="font-mono font-semibold text-slate-600">{appointment.trackingId}</span></p>
        </div>
      )}

      {showActions && (
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to={`/track?id=${appointment.trackingId}`}>
            <Button variant="outline" size="sm"><Icon.Eye size={15} /> View</Button>
          </Link>
          {appointment.status !== 'Completed' && appointment.status !== 'Cancelled' && (
            <>
              <Button variant="secondary" size="sm"><Icon.Calendar size={15} /> Reschedule</Button>
              <Button variant="ghost" size="sm" className="text-danger-600 hover:bg-danger-50"><Icon.X size={15} /> Cancel</Button>
            </>
          )}
          <Button variant="ghost" size="sm"><Icon.Download size={15} /> Invoice</Button>
        </div>
      )}
    </div>
  );
}
