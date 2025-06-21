import React from 'react';
import clsx from 'clsx';
import { useSignIconWrapperStyles } from './useSignIconWrapper';

interface SignIconWrapperProps {
  children: React.ReactNode;
  classes?: {
    root?: string;
  };
}

const SignIconWrapper: React.FC<SignIconWrapperProps> = ({
  children,
  classes: propClasses = {},
}) => {
  const classes = useSignIconWrapperStyles();
  return (
    <div className={clsx(classes.signWrapper, propClasses.root)}>
      <div className={classes.signOutline}>{children}</div>
    </div>
  );
};

export default SignIconWrapper;
