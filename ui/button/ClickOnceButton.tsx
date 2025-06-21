import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Button from '@/components/primitiveUI/Button/Button';
import { makeAppStyles } from '@/lib/styleHelper';

const useStyles = makeAppStyles((theme) => ({
  button: {
    '&:disabled': {
      cursor: 'default',
      pointerEvents: 'all !important',
      backgroundColor: theme.palette.primary.light,
      color: (theme.palette as any).primary.activeOutlined,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: (theme.palette as any).primary.activeOutlined,
      },
    },
  },
}));

const ClickOnceButton: React.FC<{
  children?: React.ReactNode;
  loadingText?: string;
  onClick: (event: React.MouseEvent) => void;
  disabled?: boolean;
  className?: string;
  style?: { [key: string]: any };
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary';
  type?: any;
  startIcon?: React.ReactNode;
}> = ({
  children,
  loadingText,
  onClick,
  disabled: propDisabled = false,
  className = '',
  ...rest
}) => {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(propDisabled);

  useEffect(() => {
    setDisabled(propDisabled);
  }, [propDisabled]);

  const buttonStyle = clsx({
    [classes.button]: true,
    [className]: true,
  });

  const handleClick = async (event: React.MouseEvent) => {
    if (disabled) return;
    setDisabled(true);
    if (onClick) await onClick(event);
    setDisabled(false);
  };

  const showDisabledText = disabled && loadingText;
  return (
    <Button {...rest} disabled={disabled} onClick={handleClick} className={buttonStyle}>
      {showDisabledText && loadingText}
      {!showDisabledText && children}
    </Button>
  );
};

export default ClickOnceButton;
