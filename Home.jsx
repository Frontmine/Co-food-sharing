import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <header className="text-center" style={{ padding: '60px 0 40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--primary)' }}>
            Buy Food in Bulk, Share the Cost
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            Join others to buy food items at wholesale prices. Split the cost, save money.
          </p>
        </header>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center', color: 'var(--primary)' }}>How It Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>1. Browse Marketplace</h3>
              <p>Explore a wide variety of food items available for bulk purchase. From rice and beans to oils and vegetables.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>2. Join a Group</h3>
              <p>Select an item and join an existing group or start a new one. Minimum participants required for each item.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>3. Split the Cost</h3>
              <p>Share the wholesale price among group members. Pay only your portion and save significantly.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>4. Get Delivered</h3>
              <p>Once the group is complete, the item is purchased and delivered to your location.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center', color: 'var(--primary)' }}>Available Food Items</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '30px' }}>
            We have a variety of food items ready for group purchases. Filter by category or browse all available options.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/dashboard" className="btn" style={{ padding: '15px 30px', fontSize: '1.2rem', textDecoration: 'none' }}>
              Browse All Food Items
            </Link>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center', color: 'var(--primary)' }}>Why Choose CoBuyFood?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Save Money</h3>
              <p>Buy at wholesale prices by sharing the cost with others. Get quality food at affordable rates.</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Convenient Delivery</h3>
              <p>Items are delivered directly to your location once the group purchase is complete.</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Community Focused</h3>
              <p>Connect with your local community while enjoying great deals on essential food items.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
