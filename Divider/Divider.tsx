import React from 'react';
import { Divider as MuiDivider, SxProps } from '@mui/material';

interface DividerProps {
  classes?: {
    root: string;
  };
  orientation?: 'horizontal' | 'vertical';
  sx?: SxProps;
}

const Divider: React.FC<DividerProps> = ({ classes, orientation = 'horizontal', sx }) => {
  return <MuiDivider orientation={orientation} sx={sx} classes={{ root: classes?.root }} />;
};

export default Divider;
