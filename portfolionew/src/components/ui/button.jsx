import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
  const Comp = asChild ? 'span' : 'button';
  
  const variants = {
    default: 'bg-accent text-white hover:bg-accent/90 shadow-sm',
    outline: 'border border-white/20 bg-[var(--glass-bg)] backdrop-blur-lg text-[var(--foreground)] hover:bg-white/10 hover:border-white/30',
    ghost: 'text-[var(--foreground)] hover:bg-white/10 hover:text-accent',
    glass: 'bg-[var(--glass-bg)] backdrop-blur-lg border border-white/10 dark:border-white/5 text-[var(--foreground)] hover:bg-white/10',
  };
  
  const sizes = {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-8 px-3 py-1 text-xs',
    lg: 'h-12 px-6 py-3 text-base',
  };

  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95',
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };
