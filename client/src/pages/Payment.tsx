import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Misc';
import { Input } from '../components/ui/Input';
import { cn, formatCurrency } from '../utils/helpers';

const methods = [
  { id: 'card', label: 'Credit/Debit Card', icon: 'CreditCard' as const },
  { id: 'bkash', label: 'Bkash', icon: 'Smartphone' as const },
  { id: 'nagad', label: 'Nagad', icon: 'Smartphone' as const },
  { id: 'rocket', label: 'Rocket', icon: 'Smartphone' as const },
  { id: 'cash', label: 'Cash at Hospital', icon: 'DollarSign' as const },
];

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = (location.state as any) || { doctor: 'Dr. Sarah Mitchell', specialization: 'Cardiologist', hospital: 'Apollo Heart Institute', date: '2024-12-15', time: '10:00 AM', fee: 1500, platformFee: 50, total: 1550, patient: { name: 'John Carter' } };
  const [method, setMethod] = useState('card');
  const [processing, setProcessing] = useState(false);

  const handlePay = (success: boolean) => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      navigate(success ? '/confirmation' : '/payment-failed', {
        state: { ...data, method: methods.find((m) => m.id === method)?.label },
      });
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Book', to: '/book' }, { label: 'Payment' }]} className="mb-4" />
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Payment</h1>

      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        <div className="space-y-6">
          {/* Payment Methods */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Select Payment Method</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {methods.map((m) => {
                const IconComp = Icon[m.icon] || Icon.CreditCard;
                return (
                  <button key={m.id} onClick={() => setMethod(m.id)} className={cn('flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left',
                    method === m.id ? 'border-primary-500 bg-primary-50' : 'border-slate-100 hover:border-slate-200')}>
                    <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center', method === m.id ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-500')}>
                      <IconComp size={20} />
                    </div>
                    <span className="font-medium text-slate-700 text-sm">{m.label}</span>
                    {method === m.id && <Icon.Check size={18} className="text-primary-600 ml-auto" />}
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Method-specific form */}
          {method === 'card' && (
            <Card className="p-6">
              <h3 className="font-bold text-slate-800 mb-4">Card Details</h3>
              <div className="space-y-4">
                <Input label="Card Number" placeholder="1234 5678 9012 3456" icon="CreditCard" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiry Date" placeholder="MM/YY" />
                  <Input label="CVV" placeholder="123" icon="Lock" />
                </div>
                <Input label="Cardholder Name" placeholder="Name on card" />
              </div>
            </Card>
          )}
          {['bkash', 'nagad', 'rocket'].includes(method) && (
            <Card className="p-6">
              <h3 className="font-bold text-slate-800 mb-4">{methods.find((m) => m.id === method)?.label} Payment</h3>
              <Input label="Mobile Number" placeholder="01XXX-XXXXXX" icon="Phone" />
              <p className="text-xs text-slate-400 mt-3">You will receive a PIN prompt on your phone to confirm the payment.</p>
            </Card>
          )}
          {method === 'cash' && (
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center"><Icon.Info size={20} /></div>
                <div>
                  <h3 className="font-bold text-slate-800">Cash Payment at Hospital</h3>
                  <p className="text-sm text-slate-500 mt-1">Pay the full amount at the hospital reception before your appointment. Your appointment will be held for 24 hours.</p>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Summary */}
        <div>
          <Card className="p-5 sticky top-20">
            <h3 className="font-bold text-slate-800 mb-4">Payment Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Doctor</span><span className="font-medium text-slate-700 text-right">{data.doctor}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Hospital</span><span className="font-medium text-slate-700 text-right">{data.hospital}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Date</span><span className="font-medium text-slate-700">{data.date}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Time</span><span className="font-medium text-slate-700">{data.time}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Patient</span><span className="font-medium text-slate-700">{data.patient?.name}</span></div>
              <div className="pt-3 border-t border-slate-50 space-y-2">
                <div className="flex justify-between text-slate-500"><span>Consultation Fee</span><span>{formatCurrency(data.fee)}</span></div>
                <div className="flex justify-between text-slate-500"><span>Platform Fee</span><span>{formatCurrency(data.platformFee)}</span></div>
                <div className="flex justify-between font-bold text-slate-800 pt-2 border-t border-slate-100"><span>Total</span><span className="text-primary-600">{formatCurrency(data.total)}</span></div>
              </div>
            </div>
            <Button fullWidth className="mt-5" size="lg" disabled={processing} onClick={() => handlePay(true)}>
              {processing ? <><Icon.Activity size={18} className="animate-pulse" /> Processing...</> : <><Icon.Lock size={18} /> Pay {formatCurrency(data.total)}</>}
            </Button>
            <button onClick={() => handlePay(false)} className="w-full mt-2 text-xs text-slate-400 hover:text-danger-500 transition-colors">Simulate failed payment</button>
            <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1"><Icon.Shield size={14} /> Secured with 256-bit encryption</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
