import React from 'react';
import clsx from 'clsx';
import { TextField } from '@mui/material';
import { makeAppStyles } from '@/lib/styleHelper';

export const useTextInputStyles = makeAppStyles((theme) => ({
  whiteBackground: {
    backgroundColor: 'white',
  },
  textFieldRoot: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
    },
  },
  errorHelperText: {
    margin: '4px 0',
  },
}));

interface TextInputProps {
  className?: string;
  classes?: { root?: string; input?: string };
  backgroundColor?: 'white';
  fullWidth?: boolean;
  inputRef?: React.Ref<any>;
  label?: string | null;
  autoFocus?: boolean;
  placeholder?: string | null;
  error?: boolean;
  helperText?: string | null;
  value?: string;
  defaultValue?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  inputProps?: object;
  InputProps?: object;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  size?: 'small' | 'medium';
  margin?: 'dense' | 'none' | 'normal';
  type?: 'text' | 'password';
  onClick?: (e: React.MouseEvent) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyPress?: (e: React.KeyboardEvent) => void;
}
const TextInput: React.FC<TextInputProps> = ({
  className,
  classes,
  onChange,
  inputRef,
  defaultValue,
  inputProps,
  InputProps,
  margin = 'dense',
  readOnly,
  onKeyPress,
  placeholder,
  backgroundColor,
  ...rest
}) => {
  const baseClasses = useTextInputStyles();
  return (
    <>
      <TextField
        className={clsx(
          {
            [baseClasses.whiteBackground]: backgroundColor === 'white',
          },

          className,
        )}
        inputProps={inputProps}
        inputRef={inputRef}
        defaultValue={defaultValue}
        size="small"
        margin={margin}
        onChange={onChange}
        placeholder={placeholder || undefined}
        classes={{ root: clsx(baseClasses.textFieldRoot, classes?.root) }}
        InputProps={{ readOnly, ...{ classes: { input: classes?.input } } }}
        FormHelperTextProps={{
          classes: { error: baseClasses.errorHelperText },
        }}
        onKeyPress={onKeyPress}
        {...rest}
      ></TextField>
    </>
  );
};
export default TextInput;
