import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProfileHeader from '../components/ProfileHeader';
import FoodCard from '../components/FoodCard';
import { foodData } from '../data/foodData';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userLocation, setUserLocation] = useState('Lagos, Nigeria');
    const [visibleItems, setVisibleItems] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(foodData.map(item => item.category))];

    const filteredData = selectedCategory === 'All' ? foodData : foodData.filter(item => item.category === selectedCategory);

    const handleLoadMore = () => {
        setVisibleItems(prev => prev + 6);
    };

    return (
        <div className="dashboard-container" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', display: 'flex', flexDirection: 'column' }}>
           
            <header style={{ 
                backgroundColor: 'white', 
                padding: '16px 24px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#333' }}
                        aria-label="Open Menu"
                    >
                        ☰
                    </button>
                    <h1 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--primary)' }}>CoBuyFood</h1>
                </div>

                <ProfileHeader username="Bolaji alexandra" />
            </header>

            <Sidebar 
                isOpen={isSidebarOpen} 
                onClose={() => setIsSidebarOpen(false)} 
                userLocation={userLocation}
                onLocationChange={setUserLocation}
            />

            <main className="container" style={{ padding: '24px', flexGrow: 1 }}>
                
                <div style={{ marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Marketplace</h2>
                    <p style={{ color: '#666' }}>Showing food deals in <strong>{userLocation}</strong></p>
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="category-filter" style={{ marginRight: '10px', fontWeight: 'bold' }}>Filter by Category:</label>
                    <select 
                        id="category-filter"
                        value={selectedCategory} 
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="food-grid" style={{ marginTop: '24px' }}>
                    {filteredData.slice(0, visibleItems).map((item, idx) => {
                        // pass an index into the item so card can stagger-animation
                        const itemWithIndex = { ...item, _index: idx };
                        return <FoodCard key={item.id} item={itemWithIndex} />;
                    })}
                </div>

                {visibleItems < filteredData.length && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px', marginBottom: '32px' }}>
                        <button 
                            onClick={handleLoadMore}
                            className="btn"
                            style={{ padding: '12px 32px', fontSize: '1rem' }}
                        >
                            Load More
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Dashboard;
