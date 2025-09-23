import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait' | 'auto';
  minHeight?: {
    mobile?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  maxHeight?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  aspectRatio = 'auto',
  minHeight = {
    mobile: '16rem',
    sm: '20rem',
    md: '24rem',
    lg: '28rem',
    xl: '32rem',
  },
  maxHeight = '40rem',
}) => {
  const getAspectRatioClasses = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'video':
        return 'aspect-video';
      case 'wide':
        return 'aspect-[16/9]';
      case 'portrait':
        return 'aspect-[3/4]';
      default:
        return '';
    }
  };

  const getMinHeightClasses = () => {
    const classes = [];
    if (minHeight.mobile) classes.push(`min-h-[${minHeight.mobile}]`);
    if (minHeight.sm) classes.push(`sm:min-h-[${minHeight.sm}]`);
    if (minHeight.md) classes.push(`md:min-h-[${minHeight.md}]`);
    if (minHeight.lg) classes.push(`lg:min-h-[${minHeight.lg}]`);
    if (minHeight.xl) classes.push(`xl:min-h-[${minHeight.xl}]`);
    return classes.join(' ');
  };

  const baseClasses = 'w-full object-cover';
  const aspectClasses = getAspectRatioClasses();
  const minHeightClasses = getMinHeightClasses();
  const maxHeightClass = maxHeight ? `max-h-[${maxHeight}]` : '';

  const finalClasses = [
    baseClasses,
    aspectRatio === 'auto' ? 'h-auto' : aspectClasses,
    aspectRatio === 'auto' ? minHeightClasses : '',
    maxHeightClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <img
      src={src}
      alt={alt}
      className={finalClasses}
      loading={loading}
    />
  );
};

export default ResponsiveImage;
