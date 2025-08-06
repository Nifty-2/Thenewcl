// components/SkeletonLoader.jsx
import React from 'react';
import Stack from './Stack';

const SkeletonBox = ({ width, height }) => {
  const style = {
    width,
    height,
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    animation: 'pulse 1.5s infinite ease-in-out',
  };

  return <div style={style}></div>;
};

const SkeletonLoader = ({
  count = 5,
  direction = 'column',
  spacing = 10,
  wrap = false,
  itemWidth = '100px',
  itemHeight = '20px',
}) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <SkeletonBox key={index} width={itemWidth} height={itemHeight} />
  ));

  return (
    <Stack direction={direction} spacing={spacing} wrap={wrap}>
      {skeletons}
    </Stack>
  );
};

export default SkeletonLoader;