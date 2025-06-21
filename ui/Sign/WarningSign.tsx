import React from 'react';
import { WarningIcon } from '../icon';
import SignIconWrapper from './SignIconWrapper/SignIconWrapper';

interface WarningSignProps {}

const WarningSign: React.FC<WarningSignProps> = () => {
  return (
    <SignIconWrapper>
      <WarningIcon />
    </SignIconWrapper>
  );
};

export default WarningSign;
