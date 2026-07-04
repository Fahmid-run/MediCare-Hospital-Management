import type { Invoice } from '../data/invoices';
import { Icon } from './Icon';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { formatDate, formatCurrency } from '../utils/helpers';

export default function InvoiceCard({ invoice }: { invoice: Invoice }) {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden card-hover">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-50">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
            <Icon.FileText size={20} />
          </div>
          <div>
            <p className="font-bold text-slate-800">{invoice.invoiceNumber}</p>
            <p className="text-xs text-slate-400">{formatDate(invoice.date)}</p>
          </div>
        </div>
        <Badge tone={invoice.status === 'Paid' ? 'success' : 'warning'} dot>{invoice.status}</Badge>
      </div>

      <div className="p-5 space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-xs text-slate-400">Doctor</p>
            <p className="font-semibold text-slate-700 mt-0.5">{invoice.doctorName}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Appointment</p>
            <p className="font-semibold text-slate-700 mt-0.5 font-mono">{invoice.appointmentId}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Payment Method</p>
            <p className="font-semibold text-slate-700 mt-0.5 flex items-center gap-1.5">
              <Icon.CreditCard size={14} className="text-slate-400" />
              {invoice.paymentMethod}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Total Amount</p>
            <p className="font-bold text-slate-800 mt-0.5">{formatCurrency(invoice.total)}</p>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-50 space-y-1.5 text-xs">
          <div className="flex justify-between text-slate-500">
            <span>Consultation Fee</span>
            <span>{formatCurrency(invoice.consultationFee)}</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Platform Fee</span>
            <span>{formatCurrency(invoice.platformFee)}</span>
          </div>
          <div className="flex justify-between font-bold text-slate-800 pt-1 border-t border-slate-100">
            <span>Total</span>
            <span>{formatCurrency(invoice.total)}</span>
          </div>
        </div>

        <Button variant="outline" size="sm" fullWidth><Icon.Download size={15} /> Download Invoice</Button>
      </div>
    </div>
  );
}
