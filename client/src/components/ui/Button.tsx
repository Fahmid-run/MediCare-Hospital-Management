import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/helpers';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md',
  secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  ghost: 'text-slate-600 hover:bg-slate-100',
  danger: 'bg-danger-500 text-white hover:bg-danger-600 shadow-sm',
  success: 'bg-success-500 text-white hover:bg-success-600 shadow-sm',
  warning: 'bg-warning-500 text-white hover:bg-warning-600 shadow-sm',
};

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
};

export default function Button({ variant = 'primary', size = 'md', fullWidth, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
