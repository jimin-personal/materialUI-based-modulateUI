import React from 'react';
import { CircularProgress, IconButton as MuiIconButton, SxProps } from '@mui/material';
import { useLoadingButtonStyle } from './useLoadingButtonStyles';

interface IconButtonProps {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  controls?: string;
  onClick?: (e: React.MouseEvent) => void;
  Icon?: React.ReactElement;
  isLoading?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  onMouseEnter?: any;
  onMouseLeave?: any;
  ref?: React.RefObject<HTMLButtonElement>;
  sx?: SxProps;
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  onClick,
  children,
  label,
  controls,
  Icon,
  isLoading,
  disableRipple = false,
  color,
  sx,
  ...rest
}) => {
  const loadingClasses = useLoadingButtonStyle();
  return (
    <MuiIconButton
      className={className}
      color={color}
      onClick={onClick}
      aria-label={label}
      aria-controls={controls}
      sx={sx}
      {...rest}
      disableRipple={disableRipple}
    >
      {isLoading && (
        <div className={loadingClasses.loadingIconOverlay}>
          <CircularProgress size={25} />
        </div>
      )}
      {Icon || children}
    </MuiIconButton>
  );
};

export default IconButton;
