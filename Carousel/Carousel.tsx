import React, { useRef, useState } from 'react';
import { addMobileStyles, makeAppStyles } from '@/lib/styleHelper';
import { ArrowBackInCarouselIcon, ArrowForwardInCarouselIcon } from '@/components/ui/icon';
import { default as SlickSlider } from 'react-slick';
import clsx from 'clsx';
import Button from '@/components/primitiveUI/Button/Button';

const useCarouselStyles = makeAppStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },

  slider: {
    alignItems: 'center',
    whiteSpace: 'nowrap',
    marginBottom: '32px',
    display: 'grid',
    gridTemplateColumns: '0fr 1fr 0fr',
    ...addMobileStyles({
      width: '100%',
      overflowX: 'auto',
      marginTop: '20px',
      marginBottom: 0,
    }),
    '& .slick-list': {
      overflow: 'hidden',
    },
    '& .slick-track': {
      display: 'flex',
    },
    '& .slick-prev': {
      marginRight: '16px',
    },
    '& .slick-next': {
      marginLeft: '16px',
    },
  },
  nonInfiniteSlider: {
    display: 'block',
    margin: '0 56px 32px 56px',
  },
  nonArrow: {
    display: 'unset',
    gridTemplateColumns: 'unset',
  },
  arrowIconButton: {
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    background: theme.palette.actions.selected,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  arrowIcon: {
    margin: 'auto',
    color: theme.palette.text.secondary,
  },
  carouselDotsContainer: {
    display: 'flex !important',
    justifyContent: 'center',
  },
  carouselDot: {
    minWidth: '12px',
    padding: '5px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginRight: '5px',
    marginLeft: '5px',
    boxShadow: 'none',
    backgroundColor: '#EBEBEB',
    '&:hover': {
      backgroundColor: '#757575',
    },
  },
  carouselDotSelected: {
    backgroundColor: '#757575',
  },
}));
interface CarouselProps {
  children: React.ReactNode;
  sliderSpeed?: number;
  infiniteSlider?: boolean;
  displayAmountPerSlide: number;
  scrollAmount: number;
  totalItemCount: number;
  autoPlay?: boolean;
  showArrow?: boolean;
  classes?: {
    customDot?: string;
    customSelectedDot: string;
  };
}
const Carousel: React.FC<CarouselProps> = ({
  children,
  sliderSpeed = 500,
  infiniteSlider = true,
  displayAmountPerSlide,
  scrollAmount,
  totalItemCount,
  autoPlay = false,
  showArrow = true,
  classes,
}) => {
  const baseClasses = useCarouselStyles();
  const infiniteSliderValue = infiniteSlider && totalItemCount > displayAmountPerSlide;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleClickCarouselDot = (index: number) => {
    (carouselRef.current as any).slickGoTo(index * displayAmountPerSlide);
    setCurrentSlideIndex(index * displayAmountPerSlide);
  };
  return (
    <>
      <SlickSlider
        autoplay={autoPlay}
        speed={sliderSpeed}
        infinite={infiniteSliderValue}
        slidesToShow={displayAmountPerSlide}
        slidesToScroll={scrollAmount}
        initialSlide={currentSlideIndex}
        arrows={showArrow}
        nextArrow={
          <div className={baseClasses.rightArrowButtonContainer}>
            <div className={baseClasses.arrowIconButton}>
              <ArrowForwardInCarouselIcon className={baseClasses.arrowIcon} />
            </div>
          </div>
        }
        prevArrow={
          <div className={baseClasses.leftArrowButtonContainer}>
            <div className={baseClasses.arrowIconButton}>
              <ArrowBackInCarouselIcon className={baseClasses.arrowIcon} />
            </div>
          </div>
        }
        afterChange={(currentIndex) => setCurrentSlideIndex(currentIndex)}
        className={clsx(baseClasses.slider, {
          [baseClasses.nonInfiniteSlider]: !infiniteSliderValue,
          [baseClasses.nonArrow]: !showArrow,
        })}
        ref={carouselRef}
      >
        {children}
      </SlickSlider>
      {totalItemCount > displayAmountPerSlide && (
        <div className={baseClasses.carouselDotsContainer}>
          {Array(Math.ceil(totalItemCount / displayAmountPerSlide))
            .fill(0)
            .map((_, index) => {
              return (
                <div key={index}>
                  <Button
                    variant={'contained'}
                    className={clsx(baseClasses.carouselDot, classes?.customDot, {
                      [classes?.customSelectedDot || baseClasses.carouselDotSelected]:
                        Math.floor(currentSlideIndex / displayAmountPerSlide) === index,
                    })}
                    onClick={() => handleClickCarouselDot(index)}
                  />
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Carousel;
