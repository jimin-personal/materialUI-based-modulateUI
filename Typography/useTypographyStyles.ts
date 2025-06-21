import { makeAppStyles } from '@/lib/styleHelper';

export const useTypographyStyles = makeAppStyles(() => ({
  root: { margin: 0, overflowWrap: 'break-word' },
  //options
  textAlignCenter: {
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
  typographyWordBreak: {
    wordBreak: 'keep-all',
    overflowWrap: 'break-word',
  },
}));

export const useTypographyVariantStyle = makeAppStyles((theme) => ({
  h1: { ...theme.typography.h1 },
  h2: { ...theme.typography.h2 },
  h3: { ...theme.typography.h3 },
  h4: { ...theme.typography.h4 },
  h5: { ...theme.typography.h5 },
  h6: { ...theme.typography.h6 },
  h6Caps: { ...theme.typography.h6Caps },
  h7: { ...theme.typography.h7 },
  h7Caps: { ...theme.typography.h7Caps },
  h8: { ...theme.typography.h8 },
  h9: { ...theme.typography.h9 },
  subtitle1: { ...theme.typography.subtitle1 },
  subtitle2: { ...theme.typography.subtitle2 },
  subtitle3: { ...theme.typography.subtitle3 },
  subtitle4: { ...theme.typography.subtitle4 },
  subtitle5: { ...theme.typography.subtitle5 },
  subtitle6: { ...theme.typography.subtitle6 },
  subtitle7: { ...theme.typography.subtitle7 },
  body1: { ...theme.typography.body1 },
  body2: { ...theme.typography.body2 },
  body3: { ...theme.typography.body3 },
  body4: { ...theme.typography.body4 },
  body5: { ...theme.typography.body5 },
  body6: { ...theme.typography.body6 },
  button: { ...theme.typography.button },
  caption: { ...theme.typography.caption },
  overline: { ...theme.typography.overline },
  m2: { ...theme.typography.m2 },
  m3: { ...theme.typography.m3 },
  m8: { ...theme.typography.m8 },
}));

export const useTypographyColorStyle = makeAppStyles((theme) => ({
  primary: {
    color: theme.palette.text.primary,
  },
  secondary: {
    color: theme.palette.text.secondary,
  },
  disabled: {
    color: theme.palette.text.disabled,
  },
  contrast: {
    color: theme.palette.text.contrast,
  },
  info: {
    color: theme.palette.info.main,
  },
  success: {
    color: theme.palette.success.main,
  },
  error: {
    color: theme.palette.error.main,
  },
  main: {
    color: theme.palette.primary.main,
  },
}));
