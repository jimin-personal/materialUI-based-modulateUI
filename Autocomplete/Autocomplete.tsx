import React from 'react';
import { Chip } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import MuiAutocomplete, {
  AutocompleteChangeReason,
  AutocompleteRenderGroupParams,
  AutocompleteRenderInputParams,
  createFilterOptions,
} from '@mui/material/Autocomplete';
import { AutocompleteGetTagProps, FilterOptionsState } from '@mui/material/useAutocomplete';
import { useAutocompleteStyles } from './useAutocompleteStyles';
import { CloseIcon } from '@/components/ui/icon';
import Typography from '@/components/primitiveUI/Typography/Typography';

export const createFilter = createFilterOptions;

export interface OptionType {
  label: string;
  group?: string;
  optionElement?: React.ReactElement;
}

interface AutocompleteProps {
  options: OptionType[];
  defaultValues?: OptionType[] | string[];
  isLoading?: boolean;
  additionalClasses?: {
    popper?: string;
    paper?: string;
    inputRoot?: string;
  };
  optionMenuElement?: React.ReactElement;
  groupIconElement?: React.ReactElement;
  onChange?: (event: React.ChangeEvent, value: any, reason: AutocompleteChangeReason) => void;
  onInputChange?: (event: object, value: string, reason: string) => void;
  filterOptions?: (options: OptionType[], state: FilterOptionsState<any>) => any[];
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  defaultValues,
  isLoading,
  additionalClasses,
  optionMenuElement,
  groupIconElement,
  onChange,
  onInputChange,
  filterOptions,
  renderInput,
}) => {
  const classes = useAutocompleteStyles();

  const handleRenderOption = (props: React.HTMLAttributes<HTMLLIElement>, option: OptionType) => {
    return (
      <li {...props}>
        {option.optionElement ?? <span className={classes.optionLabel}>{`${option.label}`} </span>}
        {optionMenuElement}
      </li>
    );
  };

  const handleRenderTags = (values: OptionType[], getTagProps: AutocompleteGetTagProps) => {
    return values.map((value: OptionType, index: number) => {
      const label = typeof value === 'string' ? value : value.label;
      return (
        <Chip
          size="small"
          className={classes.tag}
          label={label}
          {...getTagProps({ index })}
          deleteIcon={<CloseIcon className={classes.tagCloseIcon} />}
        />
      );
    });
  };

  const handleRenderGroup = (params: AutocompleteRenderGroupParams) => {
    return (
      <React.Fragment key={params.group}>
        {params.group ? (
          <ListSubheader className={classes.groupContainer}>
            {groupIconElement}
            <Typography variant="caption">{params.group}</Typography>
          </ListSubheader>
        ) : null}
        {params.children}
      </React.Fragment>
    );
  };

  return (
    <MuiAutocomplete
      freeSolo
      multiple
      disableClearable
      id="tag-auto-complete"
      options={options}
      groupBy={(option) => option.group}
      value={defaultValues}
      loading={isLoading}
      classes={{
        paper: classes.paper,
        tag: classes.tag,
        inputRoot: classes.inputRoot,
        ...additionalClasses,
      }}
      onChange={onChange}
      onInputChange={onInputChange}
      filterOptions={filterOptions}
      isOptionEqualToValue={(option, value) => value.label === option.label}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option, state) => handleRenderOption(props, option)}
      renderInput={renderInput}
      renderGroup={handleRenderGroup}
      renderTags={handleRenderTags}
      size="small"
    />
  );
};

export default Autocomplete;
