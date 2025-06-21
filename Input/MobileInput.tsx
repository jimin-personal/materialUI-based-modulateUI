import React, { useState } from 'react';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { makeAppStyles } from '@/lib/styleHelper';
import phoneUtil from '@/lib/notifications/phoneUtil';
import clsx from 'clsx';
import LocalStorageService from '@/services/LocalStorageService';
import localeUtil from '@/lib/localeUtil';

export const useMobileInputStyles = makeAppStyles((theme) => ({
  phoneInputContainer: {
    '& .form-control': {
      width: '100%',
      height: '38px',
    },
  },
}));

interface MobileInputProps {
  mobileNumber?: string;
  country?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onChange: ({ mobileNumber, isValid }: { mobileNumber?: string; isValid?: boolean }) => void;
  onChangeFocus?: (isFocused: boolean) => void;
  classes?: {
    container?: string;
  };
}

const MobileInput: React.FC<MobileInputProps> = ({
  mobileNumber,
  country = localeUtil.getRegionCodeFromLocale({
    locale: window.navigator.language,
  }),
  placeholder = '',
  autoFocus,
  onChange,
  onChangeFocus,
  classes,
  ...rest
}) => {
  const [isValid, setIsValid] = useState(true);
  const baseClasses = useMobileInputStyles();
  const storedCountryCode = LocalStorageService.mobileInputCountryCode.getItem();
  const mobileInputCountryCode = storedCountryCode || country.toLowerCase();

  const handleChangeMobileNumber = (
    updatedMobileNumber: string,
    countryData: CountryData,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string,
  ) => {
    let formattedNumber = formattedValue;

    const updatedCountryCode = countryData.countryCode;
    const isCountryCodeChanged =
      updatedCountryCode !== country || updatedCountryCode !== storedCountryCode;
    const hasMobileInputReset =
      countryData.dialCode.length === updatedMobileNumber.length || updatedMobileNumber === '';
    if (hasMobileInputReset) {
      formattedNumber = '';
    }

    if (isCountryCodeChanged) {
      LocalStorageService.mobileInputCountryCode.setItem(updatedCountryCode);
    }

    const parsedPhoneNumberResult = phoneUtil.parsePhoneNumber(
      formattedNumber,
      countryData.dialCode,
    );

    void onChange({
      mobileNumber: formattedNumber,
      isValid: parsedPhoneNumberResult.isValid,
    });
    setIsValid(parsedPhoneNumberResult.isValid);
  };

  const handleOnBlur = async (event: React.FocusEvent) => {
    const currentValue = event.target['value'];
    if (currentValue !== mobileNumber) {
      await onChange({ mobileNumber, isValid });
    }
    onChangeFocus?.(false);
  };

  return (
    <PhoneInput
      isValid={isValid}
      country={mobileInputCountryCode}
      value={mobileNumber}
      containerClass={clsx(baseClasses.phoneInputContainer, classes?.container)}
      autoFormat={false}
      onChange={handleChangeMobileNumber}
      onBlur={handleOnBlur}
      placeholder={placeholder}
      inputProps={{
        autoFocus,
      }}
      {...rest}
    />
  );
};

export default MobileInput;
