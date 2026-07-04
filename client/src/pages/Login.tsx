import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { Input } from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2.5 mb-8">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white shadow-md">
            <Icon.HeartPulse size={24} />
          </div>
          <span className="text-2xl font-bold text-slate-800">MediCare</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-8">
          <h1 className="text-2xl font-bold text-slate-800 text-center">Welcome Back</h1>
          <p className="text-slate-500 text-center mt-1.5 text-sm">Sign in to access your dashboard</p>

          <div className="mt-6 space-y-4">
            <Input label="Email Address" placeholder="john@email.com" icon="Mail" type="email" />
            <div className="relative">
              <Input label="Password" placeholder="••••••••" icon="Lock" type={showPassword ? 'text' : 'password'} />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-slate-400 hover:text-slate-600">
                {showPassword ? <Icon.Eye2Off size={18} /> : <Icon.Eye2 size={18} />}
              </button>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                Remember me
              </label>
              <a href="#" className="text-primary-600 hover:underline">Forgot password?</a>
            </div>
            <Button fullWidth size="lg" onClick={() => navigate('/dashboard')}>Sign In</Button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100" /></div>
            <div className="relative flex justify-center"><span className="bg-white px-4 text-xs text-slate-400">or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary" size="sm"><Icon.Globe size={18} /> Google</Button>
            <Button variant="secondary" size="sm"><Icon.Facebook size={18} /> Facebook</Button>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            Don't have an account? <Link to="/register" className="text-primary-600 font-semibold hover:underline">Sign up</Link>
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-6 text-xs text-slate-400">
          <Link to="/doctor" className="hover:text-primary-600">Doctor Portal</Link>
          <Link to="/admin" className="hover:text-primary-600">Admin Portal</Link>
        </div>
      </div>
    </div>
  );
}
