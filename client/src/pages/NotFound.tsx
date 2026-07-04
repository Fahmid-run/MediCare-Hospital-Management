import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 rounded-full bg-primary-50 flex items-center justify-center mx-auto">
            <Icon.HeartPulse size={64} className="text-primary-200" />
          </div>
          <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center">
            <Icon.AlertCircle size={32} className="text-amber-300" />
          </div>
        </div>
        <h1 className="text-7xl font-bold text-slate-800">404</h1>
        <h2 className="text-xl font-semibold text-slate-600 mt-2">Page Not Found</h2>
        <p className="text-slate-500 mt-3">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Link to="/"><Button size="lg"><Icon.Home size={20} /> Go Home</Button></Link>
          <Link to="/doctors"><Button variant="outline" size="lg"><Icon.Stethoscope size={20} /> Find Doctors</Button></Link>
        </div>
      </div>
    </div>
  );
}
