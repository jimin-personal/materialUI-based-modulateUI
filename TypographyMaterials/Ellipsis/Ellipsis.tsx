import React from 'react';
import clsx from 'clsx';

import { useEllipsisStyles } from './useEllipsisStyles';
import Typography, {
  TypographyVariant,
} from '@/components/primitiveUI/Typography/Typography';

export interface EllipsisProps {
  lines?: number;
  children: React.ReactNode;
  variant?: TypographyVariant;
  className?: string;
  notranslate?: boolean;
  wordBreak?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const Ellipsis: React.FC<EllipsisProps> = ({
  lines = 1,
  variant,
  className,
  notranslate = false,
  wordBreak,
  children,
  ...rest
}) => {
  const classes = useEllipsisStyles(lines);
  const lineStyle = clsx(className, {
    [classes.singleLine]: lines === 1,
    [classes.multiLine]: lines !== 1,
    [classes.ellipsisWordBreak]: wordBreak,
  });

  return (
    <Typography variant={variant} className={lineStyle} notranslate={notranslate} {...rest}>
      {children}
    </Typography>
  );
};

export default Ellipsis;
