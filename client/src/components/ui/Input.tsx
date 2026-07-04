import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/helpers';
import { Icon } from '../Icon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: keyof typeof Icon;
  hint?: string;
}

export function Input({ label, error, icon, hint, className, ...props }: InputProps) {
  const IconComp = icon ? Icon[icon] : null;
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>}
      <div className="relative">
        {IconComp && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <IconComp size={18} />
          </div>
        )}
        <input
          className={cn(
            'w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-all duration-200 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/10',
            IconComp && 'pl-10',
            error && 'border-danger-300 focus:border-danger-500 focus:ring-danger-500/10',
            className,
          )}
          {...props}
        />
      </div>
      {error ? <p className="mt-1 text-xs text-danger-600">{error}</p> : hint ? <p className="mt-1 text-xs text-slate-400">{hint}</p> : null}
    </div>
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children: ReactNode;
}

export function Select({ label, className, children, ...props }: SelectProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>}
      <div className="relative">
        <select
          className={cn(
            'w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm text-slate-800 transition-all duration-200 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/10',
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
          <Icon.ChevronDown size={18} />
        </div>
      </div>
    </div>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className, ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>}
      <textarea
        className={cn(
          'w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-all duration-200 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/10 resize-none',
          className,
        )}
        {...props}
      />
    </div>
  );
}
