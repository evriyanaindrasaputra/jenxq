import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '#/lib/utils';
import UnstyledLink, { UnstyledLinkProps } from '../Link/UnstyledLink';

const buttonLinkStyles = cva(
  'inline-flex items-center justify-center rounded px-4 py-2 font-semibold focus:outline-none focus-visible:ring focus-visible:ring-primary-500 shadow-sm transition duration-200 ease-in',
  {
    variants: {
      intent: {
        primary:
          'bg-primary-500 text-white  border border-primary-600 hover:bg-primary-600 hover:text-white active:bg-primary-500 disabled:bg-primary-400 disabled:hover:bg-primary-400',
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

type ButtonLinkProps = VariantProps<typeof buttonLinkStyles> & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, block, className, intent, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={cn(
          buttonLinkStyles({ intent, block }),
          'inline-flex items-center rounded px-4 py-2 font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'transition-colors duration-75',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
