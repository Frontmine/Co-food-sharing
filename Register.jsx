import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      meansOfPayment: '',
      meanOfIdentification: '',
      country: '',
      password: ''
  });
  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   
      if (errors[name]) {
          setErrors(prev => ({ ...prev, [name]: '' }));
      }
  };

  const validate = () => {
      const newErrors = {};
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
      if (!formData.password) newErrors.password = 'Password is required';
      return newErrors;
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
      }

     
      navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ maxWidth: '400px', marginTop: '60px' }}>
        <h2 className="mb-2 text-center">Create Account</h2>
        <p className="text-center mb-3 text-secondary">Join CoBuyFood to start saving today</p>
        
        <form onSubmit={handleSubmit} className="card" style={{ padding: '24px' }}>
            <div className="form-group mb-2">
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Full Name</label>
                <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                    placeholder="e.g. John Doe"
                />
                {errors.fullName && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.fullName}</span>}
            </div>

            <div className="form-group mb-2">
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Email Address</label>
                <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                    placeholder="e.g. john@example.com"
                />
                {errors.email && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.email}</span>}
            </div>

            <div className="form-group mb-2">
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Phone Number</label>
                <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                    placeholder="e.g. 08012345678"
                />
                {errors.phone && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.phone}</span>}
            </div>

            <div className="form-group mb-2">
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Password</label>
                <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                    placeholder="••••••••"
                />
                {errors.password && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.password}</span>}
            </div>

            <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '16px', padding: '12px' }}
            >
                Register
            </button>
        </form>
        
        <p className="text-center mt-2">
            Already have an account? <a href="#" style={{ color: 'var(--primary)' }}>Login</a>
        </p>
      </div>
    </>
  );
};
export default Register;
