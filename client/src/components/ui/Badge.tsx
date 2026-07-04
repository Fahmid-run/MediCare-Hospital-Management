import type { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

type Tone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'blue';

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  dot?: boolean;
}

const tones: Record<Tone, string> = {
  primary: 'bg-primary-100 text-primary-700',
  success: 'bg-success-100 text-success-700',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-danger-100 text-danger-700',
  neutral: 'bg-slate-100 text-slate-600',
  blue: 'bg-blue-100 text-blue-700',
};

const dots: Record<Tone, string> = {
  primary: 'bg-primary-500',
  success: 'bg-success-500',
  warning: 'bg-amber-500',
  danger: 'bg-danger-500',
  neutral: 'bg-slate-400',
  blue: 'bg-blue-500',
};

export default function Badge({ children, tone = 'neutral', className, dot }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold', tones[tone], className)}>
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full', dots[tone])} />}
      {children}
    </span>
  );
}
