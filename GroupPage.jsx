import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import GroupForm from '../components/GroupForm';

const GroupPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  if (!item) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleGroupSubmit = (users) => {
      navigate('/payment', { state: { item, users } });
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: '40px', maxWidth: '800px', paddingBottom: '40px' }}>
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Start a Group for {item.name}</h2>
            <p style={{ color: '#666' }}>
                Minimum Participants Required: <strong>{item.minParticipants || 1}</strong>
            </p>
        </div>
        <GroupForm onSubmit={handleGroupSubmit} />
      </div>
    </>
  );
};

export default GroupPage;
