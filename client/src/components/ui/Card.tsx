import type { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className, hover, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white rounded-2xl shadow-card border border-slate-100',
        hover && 'card-hover cursor-pointer',
        className,
      )}
    >
      {children}
    </div>
  );
}
