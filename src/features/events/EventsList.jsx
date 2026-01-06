import React from 'react';
import { useSelector } from 'react-redux';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsList = () => {
    const { events } = useSelector((state) => state.events);

    return (
        <div style={{ paddingBottom: '4rem' }}>
            <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Events</h1>
                <span style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Discover what's happening</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
                {events.map((event, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={event.id}
                        className="glass-panel"
                        style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px', transition: 'transform 0.3s' }}
                        whileHover={{ y: -5 }}
                    >
                        <div style={{ marginBottom: '20px' }}>
                            <span style={{
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                color: 'var(--text-primary)',
                                fontWeight: 700,
                                background: 'var(--glass-highlight)',
                                padding: '6px 10px',
                                borderRadius: '8px'
                            }}>{event.category}</span>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-primary)', lineHeight: 1.2 }}>{event.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flex: 1, lineHeight: 1.6, fontSize: '1rem' }}>{event.description}</p>

                        <div style={{
                            paddingTop: '20px',
                            borderTop: '1px solid var(--glass-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                <Calendar size={18} />
                                <span>{event.date}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                <MapPin size={18} />
                                <span>{event.location}</span>
                            </div>
                        </div>

                        <button style={{
                            marginTop: '24px',
                            width: '100%',
                            padding: '12px',
                            borderRadius: '12px',
                            background: 'var(--text-primary)', // Invert for button
                            color: 'var(--bg-dark)',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }}>
                            View Details
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EventsList;
