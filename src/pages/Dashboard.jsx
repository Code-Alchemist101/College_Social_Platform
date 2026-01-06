import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);

    const quickStats = [
        { label: 'Upcoming Events', value: '3', icon: Calendar, color: '#a78bfa' },
        { label: 'My Groups', value: '2', icon: Users, color: '#34d399' },
        { label: 'Interactions', value: '12', icon: Star, color: '#fbbf24' },
    ];

    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* Hero Section */}
            {/* Hero Section */}
            <section style={{
                textAlign: 'center',
                padding: '8vh 0 6vh',
                marginBottom: '2rem',
                position: 'relative'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-gradient" style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        lineHeight: 1.1,
                        letterSpacing: '-0.04em'
                    }}>
                        Hello, {user?.username}
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        fontWeight: 300
                    }}>
                        Your digital campus experience. Reimagined.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                >
                    <Link to="/events" className="glass-panel" style={{
                        padding: '16px 32px',
                        fontSize: '1.1rem',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontWeight: 500,
                        transition: 'transform 0.2s, background 0.2s',
                        borderRadius: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = 'var(--glass-highlight)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'var(--glass-bg)'; }}
                    >
                        Browse Events
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </section>

            {/* Stats Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                marginBottom: '6rem'
            }}>
                {quickStats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                        className="glass-panel"
                        style={{
                            padding: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px',
                            transition: 'transform 0.3s'
                        }}
                        whileHover={{ y: -5 }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '20px',
                            background: `linear-gradient(135deg, ${stat.color}22, ${stat.color}00)`,
                            border: `1px solid ${stat.color}44`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 0 20px ${stat.color}22`
                        }}>
                            <stat.icon size={28} color={stat.color} />
                        </div>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1, marginBottom: '4px', color: 'var(--text-primary)' }}>{stat.value}</div>
                            <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{stat.label}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Feature Cards */}
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ fontSize: '2rem', marginBottom: '32px', fontWeight: 600, color: 'var(--text-primary)' }}
            >
                Start Exploring
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
                <Link to="/events" style={{ textDecoration: 'none' }}>
                    <motion.div
                        className="glass-panel"
                        whileHover={{ scale: 1.02 }}
                        style={{ padding: '40px', height: '100%', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'var(--accent)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px',
                                color: 'var(--bg-dark)'
                            }}>
                                <Calendar size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '12px', color: 'var(--text-primary)' }}>Events</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.1rem' }}>
                                Discover workshops, socials, and gatherings happening right now.
                            </p>
                        </div>
                        {/* Decor */}
                        <div style={{
                            position: 'absolute',
                            top: '-20%',
                            right: '-10%',
                            width: '200px',
                            height: '200px',
                            background: 'radial-gradient(circle, var(--glass-highlight) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }} />
                    </motion.div>
                </Link>

                <Link to="/groups" style={{ textDecoration: 'none' }}>
                    <motion.div
                        className="glass-panel"
                        whileHover={{ scale: 1.02 }}
                        style={{ padding: '40px', height: '100%', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'var(--accent)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px',
                                color: 'var(--bg-dark)'
                            }}>
                                <Users size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '12px', color: 'var(--text-primary)' }}>Groups</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.1rem' }}>
                                Find your community. Join study groups and interest clubs.
                            </p>
                        </div>
                        {/* Decor */}
                        <div style={{
                            position: 'absolute',
                            top: '-20%',
                            right: '-10%',
                            width: '200px',
                            height: '200px',
                            background: 'radial-gradient(circle, var(--glass-highlight) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }} />
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
