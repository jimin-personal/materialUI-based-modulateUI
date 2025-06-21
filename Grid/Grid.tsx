import React from 'react';
import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';

export interface GridProps extends MuiGridProps {
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
}

const Grid: React.FC<GridProps> = ({ ...rest }) => {
  return <MuiGrid display="flex" {...rest} />;
};

export default Grid;
