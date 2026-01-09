import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PaymentSummary from '../components/PaymentSummary';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { item, users } = location.state || {};

    if (!item || !users) {
        return <Navigate to="/" replace />;
    }

    const handleConfirm = () => {
        alert('Payment successful! Your order has been placed.');
        navigate('/');
    };

    return (
        <>
            <Navbar />
            <div className="container" style={{ maxWidth: '600px', marginTop: '40px' }}>
                <PaymentSummary 
                    users={users} 
                    item={item} 
                    onConfirm={handleConfirm}
                />
            </div>
        </>
    );
};

export default Payment;
