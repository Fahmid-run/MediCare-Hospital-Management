import type { Review } from '../data/reviews';
import { Icon } from './Icon';
import Avatar from './ui/Avatar';

export default function ReviewCard({ review, showDoctor }: { review: Review; showDoctor?: boolean }) {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-5 card-hover">
      <div className="flex items-start gap-3">
        <Avatar src={review.patientPhoto} name={review.patientName} size="md" ring />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-slate-800">{review.patientName}</p>
            <span className="text-xs text-slate-400">{new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
          {showDoctor && <p className="text-xs text-primary-600 mt-0.5">for {review.doctorName}</p>}
          <div className="flex items-center gap-0.5 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon.Star key={i} size={14} className={i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-600 mt-3 leading-relaxed">{review.text}</p>
      {review.reply && (
        <div className="mt-3 pl-3 border-l-2 border-primary-200 bg-primary-50/50 rounded-r-lg py-2 pr-3">
          <p className="text-xs font-semibold text-primary-700">{review.doctorName} replied:</p>
          <p className="text-sm text-slate-600 mt-0.5">{review.reply}</p>
        </div>
      )}
    </div>
  );
}
