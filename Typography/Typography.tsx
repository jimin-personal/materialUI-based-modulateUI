import React from 'react';
import clsx from 'clsx';
import Notranslate from './Notranslate';

import {
  useTypographyColorStyle,
  useTypographyStyles,
  useTypographyVariantStyle,
} from './useTypographyStyles';
import { SxProps } from '@mui/material';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h6Caps'
  | 'h7'
  | 'h7Caps'
  | 'h8'
  | 'h9'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'
  | 'subtitle5'
  | 'subtitle6'
  | 'subtitle7'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6'
  | 'caption'
  | 'm3'
  | 'm2'
  | 'm4'
  | 'm8';

export const makeHtmlTag = (variant?: TypographyVariant) => {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
    case 'h6Caps':
    case 'h7':
    case 'h7Caps':
    case 'h8':
    case 'h9':
    case 'subtitle1':
    case 'subtitle2':
    case 'subtitle3':
    case 'subtitle4':
    case 'subtitle5':
    case 'subtitle6':
    case 'subtitle7':
    case 'm3':
      return 'p';
    case 'm2':
    case 'm4':
    case 'm8':
    case 'body1':
    case 'body2':
    case 'body3':
    case 'body4':
    case 'body5':
    case 'body6':
      return 'p';
    default:
      return 'span';
  }
};

interface TypographyProps {
  variant?: TypographyVariant;
  color?: 'primary' | 'secondary' | 'disabled' | 'contrast' | 'info' | 'success' | 'error' | 'main';
  bold?: boolean;
  wordBreak?: boolean;
  className?: string;
  notranslate?: boolean;
  display?: 'inline-block';
  onClick?: (event: React.MouseEvent) => void;
  align?: 'center';
  tag?: 'p' | 'span';
  children: React.ReactNode;
  sx?: SxProps;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body5',
  color,
  className = '',
  notranslate = false,
  tag,
  align,
  bold,
  wordBreak,
  ...rest
}) => {
  const classes = useTypographyStyles();
  const variantClasses = useTypographyVariantStyle();
  const textColorClasses = useTypographyColorStyle();
  const selectedVariantClass = variantClasses[variant as string];
  const selectedTextColorClass = color && textColorClasses[color];
  const Tag = tag || makeHtmlTag(variant);

  const compositedClass = clsx(
    classes.root,
    selectedVariantClass,
    selectedTextColorClass,
    {
      [classes.textAlignCenter]: align === 'center',
      [classes.textBold]: bold,
      [classes.typographyWordBreak]: wordBreak,
    },
    className,
  );

  if (notranslate) {
    return (
      <Notranslate component={Tag} className={compositedClass} {...rest}>
        {children}
      </Notranslate>
    );
  }
  return (
    <Tag className={compositedClass} {...rest}>
      {children}
    </Tag>
  );
};

export default Typography;
