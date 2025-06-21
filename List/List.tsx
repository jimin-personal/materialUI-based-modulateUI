import React from 'react';
import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiListItemText from '@mui/material/ListItemText';

interface ListItemProps {
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({ icon, label, onClick }) => {
  return (
    <MuiListItem>
      <MuiListItemButton onClick={onClick}>
        <MuiListItemIcon>{icon}</MuiListItemIcon>
        <MuiListItemText>{label}</MuiListItemText>
      </MuiListItemButton>
    </MuiListItem>
  );
};

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return <MuiList>{children}</MuiList>;
};

export default List;
