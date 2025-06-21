import React from 'react';
import MuiButton from '@mui/material/Button';
import clsx from 'clsx';
import { makeAppStyles } from '@/lib/styleHelper';
import { CircularProgress } from '@mui/material';
import { useLoadingButtonStyle } from './useLoadingButtonStyles';

const useButtonStyles = makeAppStyles((theme) => ({
  largeSize: {
    ...theme.typography.subtitle6,
    height: '40px',
  },
  defaultSize: {
    height: '36px',
  },
  fill: {
    width: '100%',
  },
  roundShape: {
    borderRadius: '40px',
  },
  root: {
    overflow: 'hidden',
  },
  primaryDisabled: {},
  outlined: {
    // border: `1px solid ${theme.palette.actions.outlinedStroke}`,
    // fontSize: '13px',
    // fontWeight: 500,
    // letterSpacing: '0.3px',
  },
}));

export interface ButtonProps {
  label?: string | null;
  onClick?: React.MouseEventHandler;
  className?: string;
  id?: string;
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary' | 'inherit';
  disabled?: boolean;
  component?: 'span';
  size?: 'small' | 'medium' | 'large';
  shape?: 'round' | 'square';
  fill?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
  classes?: {
    root?: string;
    startIcon?: string;
    label?: string;
  };
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  label,
  color = 'primary',
  variant = 'outlined',
  size,
  disabled,
  fill,
  isLoading,
  id,
  shape = 'square',
  classes,
  ...rest
}) => {
  const baseClasses = useButtonStyles();
  const loadingClasses = useLoadingButtonStyle();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isLoading) {
      return;
    }
    onClick?.(event);
  };
  return (
    <MuiButton
      className={clsx(className, {
        [baseClasses.largeSize]: size === 'large',
        [baseClasses.defaultSize]: size !== 'large',
        [baseClasses.fill]: fill,
        [baseClasses.roundShape]: shape === 'round',
        [baseClasses.outlined]: variant === 'outlined',
      })}
      classes={{
        ...classes,
        root: clsx(baseClasses.root, classes?.root),
        startIcon: baseClasses.startIcon,
      }}
      id={id}
      onClick={handleClick}
      color={color}
      variant={variant}
      size={size}
      disabled={disabled}
      {...rest}
    >
      {isLoading && (
        <div className={loadingClasses.loadingIconOverlay}>
          <CircularProgress size={25} thickness={5} />
        </div>
      )}
      {label || children}
    </MuiButton>
  );
};

export default Button;
