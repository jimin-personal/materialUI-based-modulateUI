import React from 'react';
import { Space } from 'antd';
import { useDatePickerStyles } from '@/components/primitiveUI/DatePicker/useDatePickerStyles';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generateRangePicker from 'antd/es/date-picker/generatePicker/generateRangePicker';
import { RangeValue } from 'rc-picker/lib/interface';
import DateUtil from '@/lib/dateUtil';

interface DateRangePickerProps {
  onChange: (payload: { completedFrom?: string; completedEnd?: string }) => void;
  disabled?: boolean;
  format?: string;
  defaultValue: [string, string];
}
const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onChange,
  disabled,
  format = 'L',
  defaultValue,
}) => {
  const RangePicker = generateRangePicker(dateFnsGenerateConfig);
  const classes = useDatePickerStyles();
  const handleChange = (dates: RangeValue<Date>, formatString: [string, string]) => {
    onChange({
      completedFrom: dates?.[0]?.toISOString() || '',
      completedEnd: dates?.[1]?.toISOString() || '',
    });
  };
  return (
    <Space direction="vertical" size={12} className={classes.datePickerSpace}>
      <RangePicker
        ranges={{
          Today: [new Date(), new Date()],
          'This Month': [DateUtil.startOfMonth(new Date()), DateUtil.endOfMonth(new Date())],
        }}
        onChange={handleChange}
        placement={'bottomLeft'}
        className={classes.datePickerContainer}
        popupStyle={{ zIndex: 1300 } as React.CSSProperties}
        format={format}
        defaultValue={[new Date(defaultValue[0]), new Date(defaultValue[1])]}
        disabled={disabled}
        allowEmpty={[false, false]}
      />
    </Space>
  );
};

export default DateRangePicker;
