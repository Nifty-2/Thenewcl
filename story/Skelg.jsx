import React from 'react';
import PropTypes from 'prop-types';

const SkeletonLoader = ({ width = '100%', height = '20px', radius = '4px' }) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        background: 'linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%)',
        backgroundSize: '400% 100%',
        animation: 'shimmer 1.4s ease infinite',
      }}
    />
  );
};

SkeletonLoader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
};

export default SkeletonLoader;