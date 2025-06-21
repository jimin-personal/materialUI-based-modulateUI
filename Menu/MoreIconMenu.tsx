import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { IconButton } from '@mui/material';
import { MoreIcon } from '@/components/ui/icon';
import Menu, {
  MenuOption as MuiMenuOption,
  PopoverOrigin,
} from '@/components/primitiveUI/Menu/Menu';
import { useMoreIconMenuStyles } from './useMenuStyles';

export type MenuOption = MuiMenuOption;
export interface MoreIconMenuProps {
  options: MenuOption[];
  onSelect: (payload: { label: string; value: any }) => void;
  classes?: {
    moreIcon?: string;
    moreIconActive?: string;
    popover?: string;
    iconButton?: string;
  };
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
}

const MoreIconMenu: React.FC<MoreIconMenuProps> = ({
  options,
  onSelect,
  classes,
  anchorOrigin = { vertical: 'top', horizontal: 'left' },
  transformOrigin = { vertical: 'bottom', horizontal: 'center' },
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const baseClasses = useMoreIconMenuStyles();
  const anchorEl = useRef(null);

  const handleClick = (event: React.MouseEvent) => {
    setMenuOpen(true);
    event.stopPropagation();
  };

  const handleClose = (event: React.MouseEvent) => {
    setMenuOpen(false);
    event.stopPropagation();
  };

  const additionalStyle = !menuOpen ? classes?.moreIcon : classes?.moreIconActive;

  return (
    <>
      <IconButton
        aria-label="footer-more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        ref={anchorEl}
        className={clsx(
          baseClasses.moreIcon,
          { [baseClasses.moreIconActive]: menuOpen },
          additionalStyle,
        )}
        classes={{ root: classes?.iconButton }}
      >
        <MoreIcon />
      </IconButton>

      <Menu
        onClose={handleClose}
        open={menuOpen}
        options={options}
        onSelect={onSelect}
        anchorEl={anchorEl?.current}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        PopoverClasses={{ paper: baseClasses.menuItem }}
      ></Menu>
    </>
  );
};

export default MoreIconMenu;
