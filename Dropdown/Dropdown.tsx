import React from 'react';
import {
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
  InputLabel,
  FormControl,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useDropdownStyles } from './useDropdownStyles';
import { SelectedIcon } from '@/components/ui/icon';
import _ from 'lodash';
import clsx from 'clsx';
import LoadMoreButton from '@/components/primitiveUI/Button/LoadMoreButton';
import { ListSubheader } from '@mui/material';

export type DropdownChangeEvent = SelectChangeEvent;

interface DropdownProps {
  placeholder?: string | null;
  label?: string;
  value: string;
  options: {
    value?: string;
    label: React.ReactNode;
    description?: React.ReactNode;
    type?: 'subtitle';
  }[];
  onChange: (event: DropdownChangeEvent) => void;
  classes?: {
    root?: string;
    menuPaper?: string;
  };
  disabledUnderline?: boolean;
  variant?: 'outlined' | 'standard';
  size?: 'small' | 'medium' | 'large';
  onLoadMore?: () => void;
  hasLoadMore?: boolean;
  loadMoreLabel?: string;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  label,
  options,
  value = '',
  onChange,
  classes,
  disabledUnderline = false,
  variant = 'outlined',
  size = 'medium',
  onLoadMore = () => {},
  hasLoadMore,
  loadMoreLabel,
  disabled = false,
}) => {
  const baseClasses = useDropdownStyles({ disabled });
  const handleLoadMore = (event: React.MouseEvent) => {
    event.stopPropagation();
    onLoadMore();
  };
  return (
    <FormControl variant={variant} className={clsx(baseClasses.dropdownContainer, classes?.root)}>
      {label && <InputLabel id="drop-down-label">{label}</InputLabel>}
      <MuiSelect
        className={clsx(baseClasses.dropdownComponent, {
          [baseClasses.large]: size === 'large',
          [baseClasses.medium]: size === 'medium',
          [baseClasses.small]: size === 'small',
        })}
        placeholder={placeholder || ''}
        disabled={disabled}
        autoWidth
        variant={variant}
        renderValue={(selected: string) => _.find(options, { value: selected })?.label}
        labelId="drop-down-label"
        value={value}
        onChange={onChange}
        disableUnderline={disabledUnderline}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          classes: {
            paper: classes?.menuPaper,
          },
        }}
      >
        {/* TODO fix placeholder https://app.asana.com/0/1200244029398736/1203447690684183 */}
        {placeholder && (
          <MenuItem value="" disabled key={placeholder}>
            {placeholder}
          </MenuItem>
        )}
        {options.map((item, idx) => {
          if (item.type === 'subtitle') {
            return <ListSubheader key={item.value}>{item.label}</ListSubheader>;
          }
          return (
            <MenuItem
              key={`dropdown-${idx}-${item.value}`}
              value={item.value || idx}
              // TODO: check style alignItems="flex-start"
              className={baseClasses.menuItem}
              classes={{
                selected: baseClasses.selectedMenuItem,
              }}
            >
              <ListItemIcon className={baseClasses.menuItemIcon}>
                {item.value === value && <SelectedIcon />}
              </ListItemIcon>
              <ListItemText primary={item.label} secondary={item.description} />
            </MenuItem>
          );
        })}
        {hasLoadMore && (
          <LoadMoreButton onLoadMore={handleLoadMore} loadMoreLabel={loadMoreLabel} />
        )}
      </MuiSelect>
    </FormControl>
  );
};

export default Dropdown;
