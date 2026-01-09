import React from 'react';

const PaymentSummary = ({ users, item, onConfirm }) => {
    const splitAmount = item.price / users.length;

    return (
        <div className="card">
            <div className="text-center mb-3">
                <h2 style={{ color: 'var(--primary)' }}>Payment Summary</h2>
                <p>Buying: <strong>{item.name}</strong></p>
                <p className="price-tag">Total: ₦{item.price.toLocaleString()}</p>
            </div>

            <table className="summary-table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Location</th>
                        <th>To Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.location}</td>
                            <td>₦{Math.ceil(splitAmount).toLocaleString()}</td>
                        </tr>
                    ))}
                    <tr className="total-row">
                        <td colSpan="2">Total Collected</td>
                        <td>₦{item.price.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>

            <div className="mb-3">
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    * Note: This is a demo. No actual payment will be processed.
                </p>
            </div>

            <button onClick={onConfirm} className="btn" style={{ width: '100%' }}>
                Confirm & Pay
            </button>
        </div>
    );
};

export default PaymentSummary;
