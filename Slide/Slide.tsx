import React from 'react';
import MuiSlide from '@mui/material/Slide';

interface SlideProps {
  children: React.ReactElement<any, any>;
  direction: 'left' | 'right' | 'up' | 'down';
  slideIn: boolean;
  timeout: number;
}

const Slide: React.FC<SlideProps> = ({ children, slideIn, timeout, direction, ...rest }) => {
  return (
    <MuiSlide in={slideIn} timeout={timeout} direction={direction} {...rest}>
      {children}
    </MuiSlide>
  );
};

export default Slide;
