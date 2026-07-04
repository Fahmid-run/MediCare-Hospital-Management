import type { ReactNode } from 'react';
import { Icon } from '../Icon';
import { cn } from '../../utils/helpers';

type Tone = 'primary' | 'success' | 'warning' | 'danger' | 'info';

interface AlertProps {
  tone?: Tone;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
}

const tones: Record<Tone, { bg: string; text: string; icon: string; iconBg: string }> = {
  primary: { bg: 'bg-primary-50 border-primary-200', text: 'text-primary-800', icon: 'Info', iconBg: 'bg-primary-100 text-primary-600' },
  success: { bg: 'bg-success-50 border-success-200', text: 'text-success-800', icon: 'CheckCircle', iconBg: 'bg-success-100 text-success-600' },
  warning: { bg: 'bg-amber-50 border-amber-200', text: 'text-amber-800', icon: 'AlertCircle', iconBg: 'bg-amber-100 text-amber-600' },
  danger: { bg: 'bg-danger-50 border-danger-200', text: 'text-danger-800', icon: 'XCircle', iconBg: 'bg-danger-100 text-danger-600' },
  info: { bg: 'bg-blue-50 border-blue-200', text: 'text-blue-800', icon: 'Info', iconBg: 'bg-blue-100 text-blue-600' },
};

export default function Alert({ tone = 'info', title, children, onClose }: AlertProps) {
  const t = tones[tone];
  const IconComp = Icon[t.icon as keyof typeof Icon];
  return (
    <div className={cn('flex gap-3 rounded-xl border p-4', t.bg)}>
      <div className={cn('flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center', t.iconBg)}>
        <IconComp size={18} />
      </div>
      <div className="flex-1">
        {title && <p className={cn('font-semibold text-sm mb-0.5', t.text)}>{title}</p>}
        <div className={cn('text-sm', t.text, 'opacity-90')}>{children}</div>
      </div>
      {onClose && (
        <button onClick={onClose} className={cn('flex-shrink-0', t.text, 'hover:opacity-70')}>
          <Icon.X size={18} />
        </button>
      )}
    </div>
  );
}
