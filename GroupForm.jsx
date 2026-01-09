import React, { useState } from 'react';

const GroupForm = ({ onSubmit }) => {
  
  const [users, setUsers] = useState([
    { id: 1, name: '', location: '' }
  ]);

  const addUser = () => {
    if (users.length < 4) {
      setUsers([...users, { id: Date.now(), name: '', location: '' }]);
    }
  };

  const removeUser = (id) => {
    if (users.length > 1) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleChange = (id, field, value) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, [field]: value } : user
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.some(u => !u.name || !u.location)) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit(users);
  };

  return (
    <div className="card">
      <h2>Create Group</h2>
      <p className="mb-2">Add friends to split the cost (Max 4)</p>
      
      <form onSubmit={handleSubmit}>
        {users.map((user, index) => (
          <div key={user.id} className="user-row">
            <div className="flex justify-between mb-1">
              <strong>Person {index + 1}</strong>
              {users.length > 1 && (
                <button 
                  type="button" 
                  onClick={() => removeUser(user.id)}
                  style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}
                >
                  Remove
                </button>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                className="form-input"
                value={user.name}
                onChange={(e) => handleChange(user.id, 'name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Delivery Location (e.g. Lagos, Yaba)"
                className="form-input"
                value={user.location}
                onChange={(e) => handleChange(user.id, 'location', e.target.value)}
              />
            </div>
          </div>
        ))}

        <div className="flex gap-2 mb-3">
          {users.length < 4 && (
            <button type="button" onClick={addUser} className="btn btn-secondary" style={{ flex: 1 }}>
              + Add Person
            </button>
          )}
        </div>

        <button type="submit" className="btn" style={{ width: '100%' }}>
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default GroupForm;
