import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import Typography from '@/components/primitiveUI/Typography/Typography';
import { ShowPasswordIcon, HidePasswordIcon, ErrorIcon } from '@/components/ui/icon';
import TextInput from './TextInput';
import { makeAppStyles } from '@/lib/styleHelper';

const usePasswordInputStyles = makeAppStyles((theme) => ({
  passwordLabelContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  invalidPassword: {
    display: 'flex',
    alignItems: 'center',
  },
  errorIcon: {
    width: '20px',
    height: '20px',
    marginRight: '4px',
  },
}));

interface PasswordInputProps {
  className?: string;
  fullWidth?: boolean;
  label?: string | null;
  placeholder?: string | null;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string | null;
  passwordResetDescription?: React.ReactNode;
}
const PasswordInput: React.FC<PasswordInputProps> = ({
  className,
  onChange,
  error,
  errorMessage,
  passwordResetDescription,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () => setShowPassword(!showPassword);
  const classes = usePasswordInputStyles();

  return (
    <>
      <TextInput
        className={className}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleToggleShowPassword}
              >
                {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={onChange}
        error={error}
        {...rest}
      ></TextInput>
      <div className={classes.passwordLabelContainer}>
        <div className={classes.invalidPassword}>
          {error && (
            <>
              <ErrorIcon className={classes.errorIcon} />
              <Typography variant="subtitle7" color="error">
                {errorMessage}
              </Typography>
            </>
          )}
        </div>
        {passwordResetDescription}
      </div>
    </>
  );
};
export default PasswordInput;
