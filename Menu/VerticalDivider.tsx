import React from 'react';
import { makeAppStyles } from '@/lib/styleHelper';

const VerticalDivider = () => {
  const classes = makeAppStyles((theme) => ({
    divider: {
      width: '100%',
      borderTop: 'none',
      borderColor: theme.palette.actions.border,
    },
  }))();
  return <hr className={classes.divider} />;
};

export default VerticalDivider;
