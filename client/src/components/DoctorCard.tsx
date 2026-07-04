import { Link } from 'react-router-dom';
import type { Doctor } from '../data/doctors';
import { Icon } from './Icon';
import Avatar from './ui/Avatar';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { formatCurrency } from '../utils/helpers';

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden card-hover group">
      <div className="relative p-5 pb-0">
        <div className="flex items-start gap-4">
          <div className="relative flex-shrink-0">
            <Avatar src={doctor.photo} name={doctor.name} size="xl" />
            {doctor.availableToday && (
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-success-500 border-2 border-white flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-slate-800 truncate">{doctor.name}</h3>
              {doctor.isNew && <Badge tone="success">New</Badge>}
            </div>
            <p className="text-sm text-primary-600 font-medium mt-0.5">{doctor.specialization}</p>
            <p className="text-xs text-slate-400 mt-0.5">{doctor.degree}</p>
          </div>
        </div>
      </div>

      <div className="px-5 pt-4 pb-3 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-slate-500">
          <Icon.Building size={15} className="text-slate-400" />
          <span className="truncate">{doctor.hospital}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <Icon.Award size={15} className="text-slate-400" />
          <span>{doctor.experience} years experience</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <Icon.Globe size={15} className="text-slate-400" />
          <span className="truncate">{doctor.languages.join(', ')}</span>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Icon.Star size={16} className="text-amber-400 fill-amber-400" />
          <span className="font-semibold text-slate-700 text-sm">{doctor.rating}</span>
          <span className="text-xs text-slate-400">({doctor.reviewCount})</span>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400">Fee</span>
          <p className="font-bold text-slate-800">{formatCurrency(doctor.consultationFee)}</p>
        </div>
      </div>

      <div className="px-5 pb-5 flex gap-2">
        <Link to={`/doctors/${doctor.id}`} className="flex-1">
          <Button variant="outline" size="sm" fullWidth>View Profile</Button>
        </Link>
        <Link to={`/book?doctor=${doctor.id}`} className="flex-1">
          <Button size="sm" fullWidth>Book Now</Button>
        </Link>
      </div>

      {doctor.availableToday && (
        <div className="px-5 pb-4 -mt-1">
          <Badge tone="success" dot>Available Today</Badge>
        </div>
      )}
    </div>
  );
}
