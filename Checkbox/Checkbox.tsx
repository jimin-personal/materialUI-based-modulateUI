import MuiCheckbox from '@mui/material/Checkbox';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import React from 'react';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

interface CheckboxProps extends Pick<MuiCheckboxProps, 'inputProps'> {
  color?: 'primary' | 'secondary' | 'default';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  checked?: boolean;
}

const Checkbox: React.FC<MuiCheckboxProps> = ({
  color = 'primary',
  onChange,
  checked,
  ...rest
}) => {
  return (
    <MuiCheckbox
      color={color}
      onChange={onChange}
      checked={checked}
      onClick={(e) => {
        e.stopPropagation();
      }}
      {...rest}
    />
  );
};

interface CheckboxWithLabelProps extends CheckboxProps {
  label?: string | null;
  className?: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  label,
  color = 'primary',
  className,
  ...rest
}) => {
  return (
    <MuiFormControlLabel
      className={className}
      control={<MuiCheckbox color={color} {...rest} />}
      label={label}
    />
  );
};

export { Checkbox, CheckboxWithLabel };
