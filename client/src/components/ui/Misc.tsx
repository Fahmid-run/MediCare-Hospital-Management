import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon';
import { cn } from '../../utils/helpers';

interface BreadcrumbProps {
  items: { label: string; to?: string }[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn('flex items-center gap-1.5 text-sm', className)}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <Icon.ChevronRight size={14} className="text-slate-300" />}
          {item.to ? (
            <Link to={item.to} className="text-slate-500 hover:text-primary-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-slate-800">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  action?: ReactNode;
}

export function SectionTitle({ title, subtitle, center, action }: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-2 mb-8', center ? 'items-center text-center' : 'sm:flex-row sm:items-end sm:justify-between')}>
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-balance">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-500 max-w-2xl">{subtitle}</p>}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

interface EmptyStateProps {
  icon?: keyof typeof Icon;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ icon = 'Search', title, description, action }: EmptyStateProps) {
  const IconComp = Icon[icon];
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 mb-4">
        <IconComp size={36} />
      </div>
      <h3 className="text-lg font-semibold text-slate-700">{title}</h3>
      {description && <p className="mt-1.5 text-sm text-slate-400 max-w-sm">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('animate-pulse rounded-xl bg-slate-200/70', className)} />
  );
}
