import * as React from 'react';
import hotToast, { Toaster as HotToaster } from 'react-hot-toast';
import { cn } from '#/lib/utils';

export const Toaster = HotToaster;

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
}

export function Toast({ visible, className, ...props }: ToastProps) {
  return (
    <div
      className={cn(
        'min-h-16 mb-2 flex w-[350px] flex-col items-start gap-1 rounded-md bg-white px-6 py-4 shadow-lg',
        visible && 'animate-in slide-in-from-bottom-5',
        className
      )}
      {...props}
    />
  );
}

type ToastTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

Toast.Title = function Title({ className, ...props }: ToastTitleProps) {
  return <p className={cn('text-sm font-medium', className)} {...props} />;
};

type ToastDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

Toast.Description = function Description({ className, ...props }: ToastDescriptionProps) {
  return <p className={cn('text-sm opacity-80', className)} {...props} />;
};

interface ToastOpts {
  title?: string;
  message: string;
  type?: 'success' | 'error' | 'default';
  duration?: number;
}

export function toast(opts: ToastOpts) {
  const { title, message, type = 'default', duration = 3000 } = opts;

  return hotToast.custom(
    ({ visible }) => (
      <Toast
        visible={visible}
        className={cn({
          'bg-red-600 text-white': type === 'error',
          'bg-green-400 text-white': type === 'success',
        })}
      >
        <Toast.Title>{title}</Toast.Title>
        {message ? <Toast.Description>{message}</Toast.Description> : null}
      </Toast>
    ),
    { duration }
  );
}
