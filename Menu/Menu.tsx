import React from 'react';
import { Menu as MuiMenu, MenuItem, ListItemIcon, Divider } from '@mui/material';
import PrimitiveUITypes from '../PrimititveUITypes';
import { useMenuStyles } from './useMenuStyles';

export interface PopoverOrigin {
  vertical: 'top' | 'center' | 'bottom' | number;
  horizontal: 'left' | 'center' | 'right' | number;
}
interface PopoverClasses {
  paper?: string;
}

export type MenuOption =
  | {
      icon?: React.ReactNode;
      label: string;
      variant?: 'default' | 'warning' | 'disabled';
      value: any;
    }
  | typeof MENU_DIVIDER;
export const MENU_DIVIDER = 'menu-divider' as 'menu-divider';
export interface MenuProps extends PrimitiveUITypes.BaseProps {
  anchorEl?: HTMLElement | null;
  onClose: (e: React.MouseEvent) => void;
  open: boolean;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  options: MenuOption[];
  onSelect: (option: { label: string; value: any }) => void;
  PopoverClasses?: PopoverClasses;
}

const Menu: React.FC<MenuProps> = ({
  anchorEl,
  onClose,
  open,
  options,
  onSelect,
  transformOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  },
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  },
  ...baseProps
}) => {
  const classes = useMenuStyles();

  return (
    <MuiMenu
      anchorEl={anchorEl}
      onClose={onClose}
      open={open}
      transformOrigin={transformOrigin}
      anchorOrigin={anchorOrigin}
      {...baseProps}
    >
      {options.map((option, index) => {
        if (option === MENU_DIVIDER) {
          return <Divider key={index} />;
        }
        if (React.isValidElement(option)) {
          return option;
        }
        return (
          <MenuItem
            key={`menu-item-${index}`}
            onClick={(e) => {
              onSelect(option);
              onClose(e);
            }}
          >
            {option.icon && (
              <ListItemIcon classes={{ root: classes.listItemIcon }}>{option.icon}</ListItemIcon>
            )}
            {option.label}
          </MenuItem>
        );
      })}
    </MuiMenu>
  );
};

export default Menu;
