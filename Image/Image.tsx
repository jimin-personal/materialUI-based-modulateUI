import OverlayCenterLoading from '@/components/Loading/OverlayCenterLoading';
import { makeAppStyles } from '@/lib/styleHelper';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const useImageStyles = makeAppStyles(() => ({
  imageWrapper: {
    width: '100%',
    height: '100%',
  },
  imageContentArea: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  imageContentAreaAlignedCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContentAreaCircular: {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContent: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageContentMaxWidth: {
    maxWidth: '100%',
  },
  imageContentMaxHeight: {
    maxHeight: '100%',
  },
}));

interface ImageProps {
  className?: string;
  classes?: {
    root?: string;
  };
  src: string;
  alt?: string;
  variant?: 'default' | 'circle';
  base?: 'maxHeight' | 'maxWidth';
  align?: 'center' | 'left' | 'right';
  isLoading?: boolean;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  classes,
  variant = 'default',
  align = 'left',
  isLoading,
}) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  useEffect(() => {
    setIsLoadingImage(true);
    setTimeout(() => {
      setIsLoadingImage(false);
    }, 1000);
  }, [src]);
  const baseClasses = useImageStyles();
  return (
    <div className={clsx(baseClasses.imageWrapper, className, classes?.root)}>
      <OverlayCenterLoading
        classes={{
          container: clsx(baseClasses.imageContentArea, {
            [baseClasses.imageContentAreaAlignedCenter]: align === 'center',
            [baseClasses.imageContentAreaCircular]: variant === 'circle',
          }),
        }}
        isLoading={isLoadingImage || isLoading}
      >
        {src && (
          <img
            className={baseClasses.imageContent}
            src={src}
            alt={alt}
            key={src}
            onLoad={() => setIsLoadingImage(false)}
          />
        )}
      </OverlayCenterLoading>
    </div>
  );
};

export default Image;
