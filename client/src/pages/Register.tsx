import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { Input, Select } from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function Register() {
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
          <h1 className="text-2xl font-bold text-slate-800 text-center">Create Account</h1>
          <p className="text-slate-500 text-center mt-1.5 text-sm">Join MediCare and take control of your health</p>

          <div className="mt-6 space-y-4">
            <Input label="Full Name" placeholder="John Carter" icon="User" />
            <Input label="Email Address" placeholder="john@email.com" icon="Mail" type="email" />
            <Input label="Phone Number" placeholder="+880 1XXX-XXXXXX" icon="Phone" />
            <Select label="Account Type">
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </Select>
            <div className="relative">
              <Input label="Password" placeholder="••••••••" icon="Lock" type={showPassword ? 'text' : 'password'} />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-slate-400 hover:text-slate-600">
                {showPassword ? <Icon.Eye2Off size={18} /> : <Icon.Eye2 size={18} />}
              </button>
            </div>
            <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
              <input type="checkbox" className="mt-0.5 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
              <span>I agree to the <a href="#" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a></span>
            </label>
            <Button fullWidth size="lg" onClick={() => navigate('/dashboard')}>Create Account</Button>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account? <Link to="/login" className="text-primary-600 font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
