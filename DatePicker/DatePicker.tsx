import React from 'react';
import { Space } from 'antd';
import { useDatePickerStyles } from '@/components/primitiveUI/DatePicker/useDatePickerStyles';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import { parse, format as fnsFormat } from 'date-fns';
interface DatePickerProps {
  onChange: (payload: { dates: Date }) => void;
  disabled?: boolean;
  format?: string;
}
const DatePicker: React.FC<DatePickerProps> = ({ onChange, disabled, format = 'L' }) => {
  const classes = useDatePickerStyles();
  const handleChange = (dates: Date, dateStrings: string) => {
    onChange({ dates });
  };
  const CustomDatePicker = generatePicker(dateFnsGenerateConfig);
  const today = fnsFormat(new Date(), format);
  return (
    <Space direction="vertical" size={12} className={classes.datePickerSpace}>
      <CustomDatePicker
        onChange={handleChange}
        placement={'bottomLeft'}
        className={classes.datePickerContainer}
        popupStyle={{ zIndex: 1300 } as React.CSSProperties}
        format={format}
        defaultValue={parse(today, format, new Date())}
        disabled={disabled}
      />
    </Space>
  );
};

export default DatePicker;
