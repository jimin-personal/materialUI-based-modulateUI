import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { Avatar, Box } from '@mui/material';
import { useUserAvatar } from './useUserAvatar';
import { makeAppStyles } from '@/lib/styleHelper';
import UserTypes from '@/types/users/UserTypes';
import { useUserContext } from '@/contexts/UserContext';

const useStyles = makeAppStyles((theme) => ({
  container: {},
}));

const sumChars = (str: string) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum;
};

const styles = [
  {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(255, 211, 92, 1)',
  },
  {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(251, 175, 137, 1)',
  },
  {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(219, 233, 73, 1)',
  },
  {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(167, 191, 220, 1)',
  },
  {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(226, 203,  235, 1)',
  },
];

interface UserAvatarProps {
  user?: UserTypes.UserPopulatedDateString | UserTypes.UserListProjected;
  className?: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  user = {},
  className = '',
  style = {},
  onClick = () => {},
}) => {
  const classes = useStyles();
  const { user: currentUser } = useUserContext();
  const { getUsername } = useUserAvatar();
  const { name, abbr } = getUsername(user);
  const index = sumChars(name) % styles.length;

  //move to where to use const addedStyle = { top: '1px', left: '1px', width: '32px', height: '32px' };
  if (currentUser._id === user._id) {
    return (
      <Box
        style={{
          paddingLeft: '0px',
          paddingRight: '0px',
        }}
        onClick={onClick}
      >
        <Avatar
          alt={name}
          style={{
            ...styles[index],
            border: '1px solid #FFD166',
            boxSizing: 'border-box',
            borderRadius: '50%',
            boxShadow: '0px 0px 16px rgba(255, 209, 102, 1)',
            ...style,
          }}
          className={clsx(classes.container, className)}
          src={user.photoURL}
        >
          {abbr.toUpperCase()}
        </Avatar>
      </Box>
    );
  } else {
    return (
      <Box>
        <Avatar
          alt={name}
          style={{ ...styles[index], ...style }}
          className={clsx(classes.container, className)}
          src={user.photoURL}
        >
          {abbr.toUpperCase()}
        </Avatar>
      </Box>
    );
  }
};

export default UserAvatar;
