import React, { useState, useEffect } from 'react';
import { Backdrop } from '@mui/material';
import { AnimationSettings } from '@/lib/constants';
import { useAnimationStyles } from './useAnimationStyles';

export interface AnimationProps {
  celebrationAnimation: string;
  playingAnimation: boolean;
}
export interface AnimationSettingsProps {
  [key: string]: string;
}
const Animation: React.FC<AnimationProps> = ({ celebrationAnimation, playingAnimation }) => {
  const classes = useAnimationStyles();
  const [setting, setSetting] = useState<AnimationSettingsProps>();

  useEffect(() => {
    setSetting(AnimationSettings[celebrationAnimation]);
  }, [celebrationAnimation]);

  if (!setting || !playingAnimation) {
    return null;
  }

  return (
    <Backdrop className={classes.wrapper} open={true}>
      <img src={setting.animation} alt="done" className={classes.animationGIF} />
    </Backdrop>
  );
};

export default Animation;
