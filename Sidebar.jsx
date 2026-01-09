import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, userLocation, onLocationChange }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    navigate('/register');
  };

  const menuItems = [
    { label: 'Place Order', action: () => onClose() }, // Just close sidebar to see dashboard
    { label: 'Wallet (₦50,000)', action: () => alert('Wallet Balance: ₦50,000\nLast Tx: -₦5,000 (Rice)') }, // Mock wallet
    { label: 'Order History', action: () => alert('Order History:\n1. Rice (Completed)\n2. Beans (Pending)') }, // Mock history
    { 
      label: `Location: ${userLocation}`, 
      action: () => {
        const newLoc = prompt('Enter new location:', userLocation);
        if (newLoc) onLocationChange(newLoc);
      } 
    },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999
          }}
        />
      )}

 
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '280px',
          backgroundColor: '#fff',
          boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
          zIndex: 1000,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          padding: '24px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          <h2 style={{ color: 'var(--primary)', margin: 0 }}>CoBuyFood</h2>
          <button onClick={onClose} className="btn-outline" style={{ padding: '4px 8px' }}>✕</button>
        </div>

        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {menuItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '16px' }}>
                <button 
                  onClick={item.action}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #eee',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    color: '#333'
                  }}
                  className="sidebar-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li style={{ marginTop: 'auto' }}>
              <button 
                onClick={handleLogout}
                className="btn"
                style={{ width: '100%', backgroundColor: '#ff4444', color: 'white' }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
