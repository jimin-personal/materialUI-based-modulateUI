import React from 'react';
import { useStickyBlockStyles } from './useBlockStyles';
import clsx from 'clsx';
import Block from './Block';

interface StickyBlockProps {
  children: React.ReactNode;
  className?: string;
  position?: {
    top?: number;
    bottom?: number;
  };
}

const StickyBlock: React.FC<StickyBlockProps> = ({ className, children, position }) => {
  const baseClasses = useStickyBlockStyles();
  return (
    <Block
      className={clsx(baseClasses.stickyBlock, { [baseClasses.stickyTop]: !position }, className)}
      style={position}
    >
      {children}
    </Block>
  );
};

export default StickyBlock;
