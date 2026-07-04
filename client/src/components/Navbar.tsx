import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from './Icon';
import Button from './ui/Button';
import Avatar from './ui/Avatar';
import Badge from './ui/Badge';
import { notifications } from '../data/notifications';
import { cn } from '../utils/helpers';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/book', label: 'Book Appointment', requiresAuth: true },
  { to: '/track', label: 'Track Appointment', requiresAuth: true },
  { to: '/dashboard', label: 'Dashboard', requiresAuth: true },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About' },
];



export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const unread = notifications.filter((n) => !n.read).length;
  const [isLoggined,setIsLoggined]= useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Icon.HeartPulse size={22} />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-800">MediCare</span>
              <span className="hidden sm:block text-[10px] text-slate-400 -mt-1 leading-none">
                Hospital Management
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks
              .filter(link => !link.requiresAuth || isLoggined)
              .map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors',
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
              >
                <Icon.Bell size={20} />
                {unread > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-danger-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {unread}
                  </span>
                )}
              </button>
              {notifOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setNotifOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 z-20 animate-scale-in overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                      <span className="font-semibold text-slate-800">
                        Notifications
                      </span>
                      <Badge tone="primary">{unread} new</Badge>
                    </div>
                    <div className="max-h-80 overflow-y-auto scrollbar-thin">
                      {notifications.map(n => (
                        <div
                          key={n.id}
                          className={cn(
                            'px-4 py-3 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer',
                            !n.read && 'bg-primary-50/40',
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={cn(
                                'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
                                n.read
                                  ? 'bg-slate-100 text-slate-400'
                                  : 'bg-primary-100 text-primary-600',
                              )}
                            >
                              <Icon.Bell size={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-slate-700">
                                {n.title}
                              </p>
                              <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                {n.message}
                              </p>
                              <p className="text-[11px] text-slate-400 mt-1">
                                {n.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2.5 text-center">
                      <Link
                        to="/dashboard"
                        className="text-sm font-medium text-primary-600 hover:underline"
                        onClick={() => setNotifOpen(false)}
                      >
                        View all notifications
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>

            {!isLoggined && (
              <>
                <Link to="/login" className="hidden sm:block">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/register" className="hidden sm:block">
                  <Button size="sm">Register</Button>
                </Link>
              </>
            )}

            <Link
              to="/dashboard"
              className="hidden lg:flex items-center gap-2 ml-1 pl-3 border-l border-slate-200"
            >
              <Avatar
                src="https://i.pravatar.cc/300?u=john"
                name="John Carter"
                size="sm"
                ring
              />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileOpen ? <Icon.X size={22} /> : <Icon.Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1 pt-2 border-t border-slate-100">
              {navLinks
                .filter(link => !link.requiresAuth || isLoggined)
                .map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                        isActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-slate-600 hover:bg-slate-50',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              {!isLoggined && (
                <div className="flex gap-2 mt-3 px-2">
                  <Link
                    to="/login"
                    className="flex-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Button variant="outline" size="sm" fullWidth>
                      Login
                    </Button>
                  </Link>
                  <Link
                    to="/register"
                    className="flex-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Button size="sm" fullWidth>
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
