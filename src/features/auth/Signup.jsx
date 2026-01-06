import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from './authSlice';
import { authService } from './authService';
import { useNavigate, Link } from 'react-router-dom';
import { Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Signup = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        try {
            const newUser = authService.register(formData);
            // Optionally auto-login the user
            dispatch(signup(newUser));
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-panel"
                style={{ width: '100%', maxWidth: '420px', padding: '40px', position: 'relative', zIndex: 10, backdropFilter: 'blur(30px)' }}
            >
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{
                        background: '#fff',
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                    }}>
                        <Rocket color="#000" size={32} />
                    </div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>Join Us</h1>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Create your CampusConnect ID</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {error && (
                        <div style={{
                            background: 'rgba(255, 77, 77, 0.1)',
                            border: '1px solid rgba(255, 77, 77, 0.2)',
                            color: '#ff4d4d',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            textAlign: 'center'
                        }}>
                            {error}
                        </div>
                    )}
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            style={{
                                width: '100%',
                                height: '56px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                padding: '0 20px',
                                fontSize: '1.1rem',
                                color: '#fff',
                                outline: 'none',
                                transition: 'all 0.2s'
                            }}
                            onFocus={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.1)';
                                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                            }}
                            onBlur={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.05)';
                                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="email"
                            placeholder="University Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            style={{
                                width: '100%',
                                height: '56px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                padding: '0 20px',
                                fontSize: '1.1rem',
                                color: '#fff',
                                outline: 'none',
                                transition: 'all 0.2s'
                            }}
                            onFocus={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.1)';
                                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                            }}
                            onBlur={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.05)';
                                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '32px' }}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            style={{
                                width: '100%',
                                height: '56px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                padding: '0 20px',
                                fontSize: '1.1rem',
                                color: '#fff',
                                outline: 'none',
                                transition: 'all 0.2s'
                            }}
                            onFocus={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.1)';
                                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                            }}
                            onBlur={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.05)';
                                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                            }}
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        style={{
                            width: '100%',
                            height: '56px',
                            borderRadius: '12px',
                            background: '#fff',
                            color: '#000',
                            border: 'none',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0 24px',
                            cursor: 'pointer'
                        }}
                    >
                        <span>Create Account</span>
                        <ArrowRight size={20} />
                    </motion.button>
                </form>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                        Already have an account? <Link to="/login" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>Sign in</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
