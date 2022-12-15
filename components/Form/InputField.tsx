import React from 'react';
import { cn } from '#/lib/utils';

type InputFieldProps = {
  labelName: string;
} & React.ComponentPropsWithRef<'input'>;

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ labelName, className, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor="content">{labelName}</label>
        <input
          ref={ref}
          className={cn(
            'focus:border-primary-500 focus:outline-none focus:ring-primary-500',
            'w-full rounded-md dark:bg-gray-600',
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
