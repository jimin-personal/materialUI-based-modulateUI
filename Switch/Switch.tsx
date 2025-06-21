import React, { ChangeEvent } from 'react';
import { Switch as MuiSwitch } from '@mui/material';
import { makeAppStyles } from '@/lib/styleHelper';

const useSwitchStyles = makeAppStyles((theme) => ({
  root: {
    width: `48px`,
    height: `24px`,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: `4px`,
    color: theme.palette.text.contrast,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&$checked': {
      transform: 'translateX(24px)',
      color: theme.palette.text.contrast,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: `16px`,
    height: `16px`,
    boxShadow: 'none',
  },
  track: {
    borderRadius: `50px`,
    opacity: 1,
    backgroundColor: theme.palette.actions.disabledText,
  },
  checked: {},
}));

interface SwitchProps {
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  value?: any;
  switchId?: string;
}

const Routes: React.FC<SwitchProps> = ({ checked = false, onChange, value, switchId }) => {
  const classes = useSwitchStyles();

  return (
    <MuiSwitch
      classes={classes}
      disableRipple
      color="primary"
      checked={checked}
      onChange={onChange}
      value={value}
      id={switchId}
    />
  );
};

export default Routes;
