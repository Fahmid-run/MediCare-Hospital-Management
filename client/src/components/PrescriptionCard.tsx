import type { Prescription } from '../data/prescriptions';
import { Icon } from './Icon';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { formatDate } from '../utils/helpers';

export default function PrescriptionCard({ prescription }: { prescription: Prescription }) {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden card-hover">
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 px-5 py-4 border-b border-primary-100/50">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                <Icon.FileText size={18} />
              </div>
              <div>
                <p className="font-bold text-slate-800">{prescription.id}</p>
                <p className="text-xs text-slate-400">{formatDate(prescription.date)}</p>
              </div>
            </div>
          </div>
          <Badge tone="primary">Active</Badge>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Icon.Stethoscope size={16} className="text-slate-400" />
          <span className="text-slate-500">Prescribed by</span>
          <span className="font-semibold text-slate-700">{prescription.doctorName}</span>
        </div>

        <div className="bg-amber-50 rounded-xl px-3 py-2">
          <p className="text-xs text-amber-600 font-semibold uppercase tracking-wide">Diagnosis</p>
          <p className="text-sm text-amber-800 mt-0.5">{prescription.diagnosis}</p>
        </div>

        <div>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-2">Medicines</p>
          <div className="space-y-2">
            {prescription.medicines.map((m, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                  <Icon.Pill size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-700">{m.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{m.dosage} • {m.duration}</p>
                  <p className="text-xs text-slate-400 mt-0.5 italic">{m.instructions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {prescription.notes && (
          <div className="text-xs text-slate-500 bg-slate-50 rounded-lg px-3 py-2">
            <span className="font-semibold text-slate-600">Notes: </span>{prescription.notes}
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <div className="text-sm">
            <span className="text-slate-400">Next visit: </span>
            <span className="font-semibold text-slate-700">{prescription.nextVisit}</span>
          </div>
          <Button variant="outline" size="sm"><Icon.Download size={15} /> Download PDF</Button>
        </div>
      </div>
    </div>
  );
}
