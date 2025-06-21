import styled from '@emotion/styled';
import React from 'react';

import { SearchInputIcon } from '@/components/ui/icon';
import IconButton from '@/components/primitiveUI/Button/IconButton';
import TextInput from '@/components/primitiveUI/Input/TextInput';

interface SearchInputProps {
  value: string;
  onChangeSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSearchIcon?: () => void;
  placeholder?: string | null;
}
const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeSearchInput,
  onClickSearchIcon,
  placeholder,
}) => {
  return (
    <SearchInputContainer>
      <TextInput onChange={onChangeSearchInput} value={value} placeholder={placeholder} />
      <IconButton Icon={<SearchInputIcon />} onClick={onClickSearchIcon} />
    </SearchInputContainer>
  );
};

const SearchInputContainer = styled.div(() => ({
  width: '100%',
  height: '48px',
  display: 'grid',
  gridTemplateColumns: '1fr 48px',
  alignItems: 'center',
  backgroundColor: '#EBEEF2',
  padding: '0 16px',
  borderRadius: '100px',
}));

export default SearchInput;
