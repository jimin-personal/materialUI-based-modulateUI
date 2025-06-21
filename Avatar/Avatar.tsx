import React from 'react';
import MuiAvatar from '@mui/material/Avatar';

interface AvatarProps {
  alt?: string;
  src?: string;
  classes?: {
    size?: string;
  };
}
const Avatar: React.FC<AvatarProps> = ({ classes = {}, ...rest }) => {
  return <MuiAvatar {...rest} className={classes.size} />;
};

export default Avatar;
