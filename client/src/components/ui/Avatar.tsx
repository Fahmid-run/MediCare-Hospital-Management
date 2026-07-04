import { cn } from '../../utils/helpers';

interface AvatarProps {
  src?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  ring?: boolean;
}

const sizes = {
  xs: 'w-7 h-7 text-xs',
  sm: 'w-9 h-9 text-sm',
  md: 'w-11 h-11 text-base',
  lg: 'w-16 h-16 text-xl',
  xl: 'w-24 h-24 text-3xl',
};

export default function Avatar({ src, name, size = 'md', className, ring }: AvatarProps) {
  const initials = name
    ? name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase()
    : '?';
  return (
    <div className={cn('relative rounded-full overflow-hidden flex-shrink-0 bg-primary-100 text-primary-700 font-semibold flex items-center justify-center', sizes[size], ring && 'ring-2 ring-white shadow-md', className)}>
      {src ? (
        <img src={src} alt={name || 'avatar'} className="w-full h-full object-cover" />
      ) : (
        initials
      )}
    </div>
  );
}
