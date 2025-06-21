import React from 'react';
import { Card as MuiCard, CardMedia as MuiCardMedia } from '@mui/material';

interface CardMediaProps {
  imageUrl?: string;
}

export const CardMedia: React.FC<CardMediaProps> = ({ imageUrl }) => {
  return <MuiCardMedia component="img" image={imageUrl} />;
};

interface CardProps {
  className?: string;
  elevation?: number;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, elevation, children }) => {
  return (
    <MuiCard className={className} elevation={elevation}>
      {children}
    </MuiCard>
  );
};

export default Card;
