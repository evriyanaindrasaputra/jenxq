import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '#/lib/utils';

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded px-4 py-2 font-semibold focus:outline-none focus-visible:ring focus-visible:ring-primary-500 shadow-sm transition duration-200 ease-in',
  {
    variants: {
      intent: {
        primary:
          'bg-primary-500 text-white border border-primary-600 hover:bg-primary-600 hover:text-white active:bg-primary-500 disabled:bg-primary-400 disabled:hover:bg-primary-400',
      },
      block: {
        true: 'w-full justify-center',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, block, className, intent, ...rest }, ref) => {
    return (
      <button
        className={cn(buttonStyles({ intent, block }), className)}
        ref={ref}
        type="button"
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
