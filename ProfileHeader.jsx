import React from 'react';

const ProfileHeader = ({ username = "User" }) => {
  return (
    <div className="profile-header" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div 
        style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          backgroundColor: 'gray', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          color: 'white',
          fontSize: '18px',
          fontWeight: 'bold',
          backgroundImage: 'url(https://placehold.co/100x100/green/white?text=U)',
          backgroundSize: 'cover'
        }}
      />
      <span style={{ fontSize: '1rem', fontWeight: 600 }}>{username}</span>
    </div>
  );
};

export default ProfileHeader;
