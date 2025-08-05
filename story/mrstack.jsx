// components/Stack.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Stack = ({ direction = 'row', spacing = 8, wrap = false, numChildren = 3, children }) => {
  const stackStyle = {
    display: 'flex',
    flexDirection: direction,
    gap: `${spacing}px`,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    border: '1px dashed gray',
    padding: '10px',
  };

  const defaultChildren = Array.from({ length: numChildren }, (_, i) => (
    <div
      key={i}
      style={{
        background: '#e0e0e0',
        padding: '20px',
        textAlign: 'center',
        minWidth: '50px',
        borderRadius: '4px',
      }}
    >
      {i + 1}
    </div>
  ));

  return <div style={stackStyle}>{children || defaultChildren}</div>;
};

Stack.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  numChildren: PropTypes.number,
  children: PropTypes.node,
};

export default Stack;