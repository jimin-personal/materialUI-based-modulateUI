import React from 'react';
import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { addMobileStyles, makeAppStyles } from '@/lib/styleHelper';

export const useRadioGroupStyles = makeAppStyles(() => ({
  radioButtonLabel: {
    ...addMobileStyles({
      '& .MuiSvgIcon-root': {
        fontSize: '32px',
      },
    }),
  },
  radioFormControl: {
    width: '100%',
  },
  radioFormLabel: {
    flex: 1,
  },
}));

interface RadioGroupProps {
  options: { value: any; label: React.ReactNode }[];
  label?: string;
  value?: string;
  onSelect: (param: { value: any }) => void;
  error?: boolean;
  helperText?: string;
  classes?: {
    radio?: {
      checked?: string;
    };
  };
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onSelect,
  error,
  helperText,
  classes,
}) => {
  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    onSelect({ value: event.target.value });
  };
  const baseClasses = useRadioGroupStyles();
  return (
    <FormControl
      component="fieldset"
      error={error}
      classes={{ root: baseClasses.radioFormControl }}
    >
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <MuiRadioGroup value={value} onChange={handleChange}>
        {options.map((option) => (
          <FormControlLabel
            label={option.label}
            value={option.value}
            control={
              <Radio
                classes={{ root: baseClasses.radioButtonLabel, checked: classes?.radio?.checked }}
              />
            }
            key={option.value}
            classes={{ label: baseClasses.radioFormLabel }}
          />
        ))}
      </MuiRadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default RadioGroup;
