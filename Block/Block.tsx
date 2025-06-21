import React from 'react';
import clsx from 'clsx';
import { Box, BoxProps } from '@mui/material';
import { useBlockStyles } from './useBlockStyles';

export interface BlockProps extends BoxProps {
  className?: string;
  style?: React.CSSProperties;
  fill?: boolean;
  overflowBox?: boolean;
}

const Block: React.FC<BlockProps> = ({
  className,
  children,
  style,
  fill,
  overflowBox,
  ...rest
}) => {
  const classes = useBlockStyles();
  return (
    <Box
      className={clsx(
        classes.block,
        { [classes.fill]: !!fill, [classes.overflow]: !!overflowBox },
        className,
      )}
      style={style}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Block;
