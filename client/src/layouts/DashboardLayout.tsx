import { useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Icon } from '../components/Icon';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import { cn } from '../utils/helpers';

export type SidebarItem = { to: string; label: string; icon: keyof typeof Icon; badge?: string };

interface DashboardLayoutProps {
  children?: ReactNode;
  items: SidebarItem[];
  user: { name: string; role: string; photo: string };
  title: string;
  accent?: 'primary' | 'success' | 'warning';
}

export default function DashboardLayout({ children, items, user, title, accent = 'primary' }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const accentBg = {
    primary: 'from-primary-500 to-primary-700',
    success: 'from-success-500 to-success-700',
    warning: 'from-amber-500 to-amber-700',
  }[accent];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        <div className="px-5 py-5 border-b border-slate-100">
          <Link to="/" className="flex items-center gap-2.5">
            <div className={cn('w-9 h-9 rounded-xl bg-gradient-to-br flex items-center justify-center text-white', accentBg)}>
              <Icon.HeartPulse size={20} />
            </div>
            <span className="text-lg font-bold text-slate-800">MediCare</span>
          </Link>
        </div>

        <div className="px-4 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <Avatar src={user.photo} name={user.name} size="md" ring />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-800 truncate">{user.name}</p>
              <p className="text-xs text-slate-400 truncate">{user.role}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-thin">
          <p className="px-3 mb-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{title}</p>
          <div className="space-y-1">
            {items.map((item) => {
              const IconComp = Icon[item.icon];
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to.endsWith('/dashboard') || item.to === '/doctor' || item.to === '/admin'}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all',
                      isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50',
                    )
                  }
                >
                  <IconComp size={19} />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && <Badge tone="danger">{item.badge}</Badge>}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="px-3 py-3 border-t border-slate-100">
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
            <Icon.LogOut size={19} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-slate-200/60 px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100">
              <Icon.Menu size={22} />
            </button>
            <h1 className="text-lg font-bold text-slate-800">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100">
              <Icon.Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-danger-500" />
            </button>
            <Avatar src={user.photo} name={user.name} size="sm" ring />
          </div>
        </header>

        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div key={location.pathname} className="animate-fade-in">{children}</div>
        </div>
      </div>
    </div>
  );
}
