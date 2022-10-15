import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode //string,
  asChild?: boolean,
  className?: string,
}

export function Button({children, asChild, className, ...props}: ButtonProps) {
  const CompTag = asChild ? Slot : 'button';

  return (
    <CompTag 
      className={clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-color focus:ring-2 ring-white',
        className
      )}
      {...props}
    >
      {children}
    </CompTag>
  )
}