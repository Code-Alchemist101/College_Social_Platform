import React from 'react';
import { useSelector } from 'react-redux';
import { Settings, ChevronRight, Bell, Shield, CircleUser } from 'lucide-react';

const Profile = () => {
    const { user } = useSelector((state) => state.auth);

    const menuItems = [
        { icon: CircleUser, label: 'Personal Information', color: '#0071E3' },
        { icon: Bell, label: 'Notifications', color: '#FF3B30' },
        { icon: Shield, label: 'Privacy & Security', color: '#34C759' },
        { icon: Settings, label: 'Account Settings', color: '#8E8E93' },
    ];

    return (
        <div className="animate-fade-in" style={{ maxWidth: '700px', margin: '0 auto', paddingBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent), #666)',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    fontWeight: 600,
                    color: 'black',  // Contrast with white/accent
                    boxShadow: '0 20px 40px -10px rgba(255,255,255,0.1)'
                }}>
                    {user?.username?.charAt(0).toUpperCase()}
                </div>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>{user?.username}</h1>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Student • Computer Science</p>
            </div>

            <div className="glass-panel" style={{ overflow: 'hidden', borderRadius: '24px' }}>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '20px 24px',
                            borderBottom: index !== menuItems.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '16px'
                        }}>
                            <item.icon size={20} color="white" />
                        </div>
                        <span style={{ flex: 1, fontSize: '1.05rem', fontWeight: 500, color: '#fff' }}>{item.label}</span>
                        <ChevronRight size={20} color="rgba(255,255,255,0.3)" />
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
                    CampusConnect v0.3.0
                </p>
            </div>
        </div>
    );
};

export default Profile;
