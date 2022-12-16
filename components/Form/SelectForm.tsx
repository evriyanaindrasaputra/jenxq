import React from 'react';

import { cn } from '#/lib/utils';
import { SelectItemType } from '#/lib/constants/baseConstants';

type SelectFormProps = {
  labelName: string;
  labelHTMLFor: string;
  selectOptions: SelectItemType[];
} & React.ComponentPropsWithRef<'select'>;

const SelectForm = React.forwardRef<HTMLSelectElement, SelectFormProps>(
  ({ labelName, selectOptions, labelHTMLFor, className, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={labelHTMLFor}>{labelName}</label>
        <select
          ref={ref}
          className={cn(
            'focus:border-primary-500 focus:outline-none focus:ring-primary-500',
            'rounded-md dark:bg-gray-600 placeholder:dark:text-gray-300',
            className
          )}
          {...rest}
        >
          {selectOptions.map((option, index) => (
            <option value={option.value} key={index}>
              {option.optionLabel}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

SelectForm.displayName = 'SelectForm';

export default SelectForm;
