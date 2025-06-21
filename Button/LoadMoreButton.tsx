import { LoadMoreIcon } from '@/components/ui/icon';
import { makeAppStyles } from '@/lib/styleHelper';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '../Typography/Typography';
import Button from './Button';
import clsx from 'clsx';
import Block from '../Block/Block';

const useLoadMoreButtonStyles = makeAppStyles((theme) => ({
  loadMoreButtonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  loadMore: {
    display: 'flex',
    alignItems: 'center',
  },
  loadMoreButton: {
    color: theme.palette.text.primary,
    backgroundColor: 'white',
  },
  loadMoreIcon: {
    color: theme.palette.text.secondary,
    width: '20px',
    marginRight: '6px',
  },
}));

interface LoadMoreButtonProps {
  isLoading?: boolean;
  onLoadMore: (event: React.MouseEvent) => void;
  loadMoreLabel?: string | null;
  classes?: {
    container?: string;
  };
  my?: number;
  mb?: number;
  mt?: number;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  isLoading,
  onLoadMore,
  loadMoreLabel,
  classes,
  my = 4,
  mb = 4,
  mt = 4,
}) => {
  const baseClasses = useLoadMoreButtonStyles();
  const { t: commonT } = useTranslation('common');
  return (
    <Block
      className={clsx(baseClasses.loadMoreButtonContainer, classes?.container)}
      my={my}
      mt={mt}
      mb={mb}
    >
      <Button isLoading={isLoading} onClick={onLoadMore} className={baseClasses.loadMoreButton}>
        <Typography className={baseClasses.loadMore}>
          <LoadMoreIcon className={baseClasses.loadMoreIcon} />
          {loadMoreLabel || commonT('load_more', 'Load more')}
        </Typography>
      </Button>
    </Block>
  );
};

export default LoadMoreButton;
