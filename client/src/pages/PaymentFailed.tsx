import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import Button from '../components/ui/Button';

export default function PaymentFailed() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="w-20 h-20 rounded-full bg-danger-100 text-danger-600 flex items-center justify-center mx-auto mb-5 animate-scale-in">
        <Icon.XCircle size={44} />
      </div>
      <h1 className="text-3xl font-bold text-slate-800">Payment Failed</h1>
      <p className="text-slate-500 mt-2">Your payment could not be processed. Please try again or use a different payment method.</p>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <Link to="/payment"><Button><Icon.CreditCard size={18} /> Try Again</Button></Link>
        <Link to="/"><Button variant="ghost"><Icon.Home size={18} /> Back Home</Button></Link>
      </div>
    </div>
  );
}
