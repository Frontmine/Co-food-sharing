import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
    
    const minParticipants = item.minParticipants || 1;
   
    const currentParticipants = item.currentParticipants ?? 0;
    const filledRatio = Math.min(currentParticipants / Math.max(minParticipants, 1), 1);

    const navigate = useNavigate();

    const handleShare = () => {
        if (minParticipants > 1) {
            navigate('/group', { state: { item } });
        } else {
            // Instant Buy Now - Simulate a single user interaction
            // In a real app we'd use the logged-in user context
            const dummyUser = [{ id: 'me', name: 'You', location: 'Your Location' }];
            navigate('/payment', { state: { item, users: dummyUser } });
        }
    };

    const animationDelay = (typeof item._index === 'number') ? `${item._index * 80}ms` : '0ms';

    return (
        <div className="card food-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', animationDelay }}>
            <img 
                src={item.image} 
                alt={item.name} 
                className="food-image" 
                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
            />
            <div className="food-details" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '10px 0' }}>{item.name}</h3>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span className="price-tag" style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                        ₦{item.price.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>Per {item.unit}</span>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '8px' }}>
                    <div style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '6px 10px', borderRadius: '6px', fontSize: '0.9rem' }}>
                        Min: {minParticipants}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#555' }}>
                        <strong>{currentParticipants}</strong> joined
                    </div>
                </div>

                <div style={{ height: '8px', background: '#f0f0f0', borderRadius: '6px', marginTop: '10px', overflow: 'hidden' }}>
                    <div style={{ width: `${filledRatio * 100}%`, height: '100%', background: 'linear-gradient(90deg, #4caf50, #2e7d32)', transition: 'width 400ms ease' }} />
                </div>
                
                <button 
                    onClick={handleShare} 
                    className="btn mt-2" 
                    style={{ width: '100%', marginTop: '12px' }}
                >
                    {minParticipants > 1 ? 'Find Sharing Group' : 'Buy Now'}
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
