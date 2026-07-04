import type { ReactNode } from 'react';
import { Icon } from '../Icon';
import { cn } from '../../utils/helpers';

type Tone = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: keyof typeof Icon;
  tone?: Tone;
  trend?: { value: string; up: boolean };
  children?: ReactNode;
}

const tones: Record<Tone, { bg: string; text: string }> = {
  primary: { bg: 'bg-primary-100', text: 'text-primary-600' },
  success: { bg: 'bg-success-100', text: 'text-success-600' },
  warning: { bg: 'bg-amber-100', text: 'text-amber-600' },
  danger: { bg: 'bg-danger-100', text: 'text-danger-600' },
  info: { bg: 'bg-blue-100', text: 'text-blue-600' },
  neutral: { bg: 'bg-slate-100', text: 'text-slate-600' },
};

export default function StatsCard({ label, value, icon, tone = 'primary', trend, children }: StatsCardProps) {
  const IconComp = Icon[icon];
  const t = tones[tone];
  return (
    <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-5 card-hover">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-1.5 text-2xl font-bold text-slate-800">{value}</p>
          {trend && (
            <div className="mt-2 flex items-center gap-1 text-xs">
              <span className={cn('font-semibold', trend.up ? 'text-success-600' : 'text-danger-600')}>
                {trend.up ? '↑' : '↓'} {trend.value}
              </span>
              <span className="text-slate-400">vs last month</span>
            </div>
          )}
          {children}
        </div>
        <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', t.bg, t.text)}>
          <IconComp size={24} />
        </div>
      </div>
    </div>
  );
}
