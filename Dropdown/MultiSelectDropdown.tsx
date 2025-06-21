import React, { useState, useEffect } from 'react';
import {
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
  InputLabel,
  FormControl,
  ListItemIcon,
  CircularProgress,
} from '@mui/material';
import { useMultiSelectDropdownStyles } from './useDropdownStyles';
import clsx from 'clsx';
import { Checkbox } from '@/components/primitiveUI/Checkbox/Checkbox';
import { useLoadingButtonStyle } from '../Button/useLoadingButtonStyles';

interface DropdownProps {
  label?: string;
  isLoading?: boolean;
  selected?: string[];
  options: { value: string; label: React.ReactNode }[];
  onSelect: (payload: { selected: string[] }) => void;
  classes?: {
    container?: string;
  };
  allSelectLabel: string;
  size?: 'small' | 'medium' | 'large';
}

const SELECT_ALL = 'all';

const MultiSelectDropdown: React.FC<DropdownProps> = ({
  label,
  isLoading,
  options,
  selected: propSelected,
  onSelect,
  classes,
  allSelectLabel,
  size = 'medium',
}) => {
  const baseClasses = useMultiSelectDropdownStyles();
  const loadingClasses = useLoadingButtonStyle();
  const [selected, setSelected] = useState<string[]>(options.map(({ value }) => value));
  const isAllOptionSelected = selected.length === options.length;

  useEffect(() => {
    if (propSelected) {
      setSelected(propSelected);
    }
  }, [propSelected]);

  const handleSelect = (event: SelectChangeEvent<typeof selected>) => {
    const value =
      typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value;
    const selectedOptions = value.filter((value) => value !== SELECT_ALL) || [];
    const isSelectAll = value.includes(SELECT_ALL) || false;
    if (!isSelectAll) {
      setSelected(selectedOptions);
      onSelect({ selected: selectedOptions });
      return;
    }

    if (selectedOptions.length < options.length) {
      setSelected(options.map(({ value }) => value));
      onSelect({ selected: options.map(({ value }) => value) });
      return;
    }

    if (selectedOptions.length === options.length) {
      setSelected([]);
      onSelect({ selected: [] });
      return;
    }
  };

  // To enable checkbox click event bubbling
  const handleClickCheckbox = () => {};

  const renderDisplayValue = (selected: string[]): React.ReactNode => {
    if (options.length === 1) {
      return options[0].label;
    }
    if (isAllOptionSelected) {
      return allSelectLabel;
    }
    const firstSelectedOptionLabel = options.find((menu) => menu.value === selected[0])?.label;
    if (selected.length > 1) {
      return `${firstSelectedOptionLabel} + ${selected.length - 1}`;
    }

    return firstSelectedOptionLabel;
  };

  return (
    <FormControl
      variant={'outlined'}
      className={clsx(baseClasses.multiSelectDropdownContainer, classes?.container)}
    >
      {isLoading && (
        <div className={loadingClasses.loadingIconOverlay}>
          <CircularProgress size={25} />
        </div>
      )}
      {label && <InputLabel id="checkmarks-drop-down-label">{label}</InputLabel>}
      <MuiSelect
        multiple
        className={clsx(baseClasses.multipleDropDownComponent, {
          [baseClasses.large]: size === 'large',
          [baseClasses.medium]: size === 'medium',
          [baseClasses.small]: size === 'small',
        })}
        variant={'outlined'}
        disabled={options.length <= 1}
        renderValue={renderDisplayValue}
        labelId="checkmarks-drop-down-label"
        value={selected}
        onChange={handleSelect}
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
            paper: baseClasses.menuPaper,
          },
        }}
      >
        {options.length > 1 && (
          <MenuItem
            key={'dropdown-all'}
            value={SELECT_ALL}
            classes={{ selected: baseClasses.selectedListItem, root: baseClasses.listItem }}
          >
            <ListItemIcon>
              <Checkbox
                indeterminate={!isAllOptionSelected && selected.length !== 0}
                color={'default'}
                checked={isAllOptionSelected}
                value={SELECT_ALL}
                onClick={handleClickCheckbox}
              />
            </ListItemIcon>
            {allSelectLabel}
          </MenuItem>
        )}

        {options.map((item, idx) => (
          <MenuItem
            key={`dropdown-${idx}-${item.label}`}
            value={item.value}
            classes={{ selected: baseClasses.selectedListItem, root: baseClasses.listItem }}
          >
            <ListItemIcon>
              <Checkbox
                color={'default'}
                checked={!!selected.find((selected) => selected === item.value)}
                value={item.value}
                onClick={handleClickCheckbox}
              />
            </ListItemIcon>
            {item.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default MultiSelectDropdown;
