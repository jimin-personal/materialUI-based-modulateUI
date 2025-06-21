import React from 'react';
import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';
import { useRadioGroupInputStyles } from './useRadioGroupInputStyles';
import uuidUtil from '@/lib/uuidUtil';
import { useTranslation } from 'react-i18next';
import { AddIcon, CloseIcon, SelectedIcon } from '@/components/ui/icon';
import IconButton from '../Button/IconButton';
import Button from '../Button/Button';

interface RadioGroupInputProps {
  options: { value: any; label: string }[];
  label?: string;
  value?: string;
  error?: boolean;
  helperText?: string;
  onChange: ({ options }: { options: { value: any; label: string }[] }) => void;
  onScoreOptionChange: ({
    scoreOptions,
  }: {
    scoreOptions: { optionId: string; score: number }[];
  }) => void;
  scoreOptions?: { optionId: string; score: number }[];
  isChangingScoreOption?: boolean;
  rightOptionId?: string;
}

const RadioGroupInput: React.FC<RadioGroupInputProps> = ({
  label,
  options = [{ value: uuidUtil.generateUid(), label: '' }],
  value,
  error,
  helperText,
  onChange,
  onScoreOptionChange,
  scoreOptions,
  isChangingScoreOption,
  rightOptionId,
}) => {
  const { t } = useTranslation('form');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const baseClasses = useRadioGroupInputStyles();

  const handleFieldValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isChangingScoreOption) {
      return;
    }
    const optionId = event.target.value;
    onScoreOptionChange({ scoreOptions: [{ optionId, score: 1 }] });
  };

  const changeOptionValue = ({ optionId, value }: { optionId: string; value: string }) => {
    const updatedOptions = [...options];
    const optionIndex = updatedOptions.findIndex(
      ({ value: optionValue }) => optionValue === optionId,
    );
    updatedOptions[optionIndex].label = value;
    onChange({ options: updatedOptions });
  };

  const addOptionValue = () => {
    onChange({ options: [...options, { value: uuidUtil.generateUid(), label: '' }] });
  };

  const removeOptionValue = ({ optionIdx }: { optionIdx: number }) => {
    const updatedOptions = [...options];
    updatedOptions.splice(optionIdx, 1);
    onChange({ options: updatedOptions });
  };

  return (
    <FormControl
      className={baseClasses.radioGroupInputContainer}
      component="fieldset"
      error={error}
    >
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <MuiRadioGroup onChange={handleFieldValueChange} value={scoreOptions?.[0]?.optionId}>
        {options.map((option, optionIdx) => (
          <div className={baseClasses.optionContainer} key={option.value}>
            <Radio
              value={isChangingScoreOption ? option.value : null}
              classes={{
                checked: baseClasses.radioChecked,
              }}
            />
            <TextField
              autoFocus={optionIdx > 0 && optionIdx + 1 === options.length && option.label === ''}
              value={option.label}
              onChange={(event) =>
                changeOptionValue({ optionId: option.value, value: event.target.value })
              }
              placeholder={
                t('multi_select_field.option_placeholder', {
                  defaultValue: 'Option {{optionIdx}}',
                  optionIdx: optionIdx + 1,
                }) as string
              }
              variant={'standard'}
              InputProps={{
                classes: {
                  root: baseClasses.inputValue,
                  underline: baseClasses.inputUnderline,
                },
              }}
            />
            <div>{rightOptionId === option.value && <SelectedIcon isActive />}</div>
            {options.length !== 1 && (
              <IconButton Icon={<CloseIcon />} onClick={() => removeOptionValue({ optionIdx })} />
            )}
          </div>
        ))}
        <div className={baseClasses.addOptionContainer}>
          <Button
            variant="text"
            startIcon={<AddIcon />}
            label={t('field.multi_select.add_option', 'Add an option')}
            onClick={addOptionValue}
            classes={{
              root: baseClasses.addOptionLabel,
            }}
          />
        </div>
      </MuiRadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default RadioGroupInput;
