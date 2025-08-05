import React from 'react';
import PropTypes from 'prop-types';

const AvatarGroup = ({ avatars, maxVisible = 5, size = 40 }) => {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const remaining = avatars.length - maxVisible;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {visibleAvatars.map((url, index) => (
        <img
          key={index}
          src={url}
          alt="avatar"
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            border: '2px solid white',
            objectFit: 'cover',
            marginLeft: index === 0 ? 0 : -size / 3,
            boxShadow: '0 0 0 1px #ccc',
          }}
        />
      ))}
      {remaining > 0 && (
        <div
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: '#aaa',
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: -size / 3,
            boxShadow: '0 0 0 1px #ccc',
          }}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};

AvatarGroup.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.string).isRequired,
  maxVisible: PropTypes.number,
  size: PropTypes.number,
};

export default AvatarGroup;