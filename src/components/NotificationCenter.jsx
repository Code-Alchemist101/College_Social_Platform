import React from 'react';
import { Bell, Check, Info } from 'lucide-react';

const NotificationCenter = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const notifications = [
        { id: 1, type: 'info', text: 'New event "Tech Talk" added near you.', time: '2m ago' },
        { id: 2, type: 'success', text: 'You successfully joined "React Devs".', time: '1h ago' },
        { id: 3, type: 'info', text: 'Welcome to CampusConnect!', time: '1d ago' },
    ];

    return (
        <div
            className="glass-panel animate-fade-in"
            style={{
                position: 'absolute',
                top: '60px',
                right: '0',
                width: '320px',
                zIndex: 100,
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.2)',
                background: 'var(--glass-menu-bg)', // Dynamic background
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)'
            }}
        >
            <div style={{
                padding: '12px 16px',
                borderBottom: '1px solid var(--glass-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Notifications</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>Mark all read</span>
            </div>

            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {notifications.map(notif => (
                    <div key={notif.id} style={{
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--glass-border)',
                        display: 'flex',
                        gap: '12px',
                        transition: 'background 0.2s',
                        cursor: 'pointer'
                    }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--glass-highlight)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: notif.type === 'success' ? '#34d399' : '#60a5fa',
                            marginTop: '6px'
                        }} />
                        <div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{notif.text}</p>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{notif.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationCenter;
