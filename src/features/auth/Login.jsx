import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';
import { authService } from './authService';
import { useNavigate, Link } from 'react-router-dom';
import { Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        try {
            const user = authService.login(formData.username, formData.password);
            dispatch(login(user));
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            {/* Background 3D effects are global in Layout, but Login is likely outside of ProtectedRoute, wait wrapped in App.jsx? 
                App.jsx imports Login directly. Login and Signup are separate routes. 
                They should probably also have the Background3D or a variation. 
                I'll assume Layout wraps everything. Checked App.jsx, Layout wraps EVERYTHING. Good.
            */}

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-panel"
                style={{ width: '100%', maxWidth: '420px', padding: '40px', position: 'relative', zIndex: 10, backdropFilter: 'blur(30px)' }}
            >
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{
                        background: 'var(--accent)',
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                    }}>
                        <Rocket color="var(--bg-dark)" size={32} />
                    </div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>Sign in</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Welcome back to CampusConnect</p>
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
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                padding: '0 20px',
                                fontSize: '1.1rem',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                transition: 'all 0.2s'
                            }}
                            onFocus={(e) => {
                                e.target.style.background = 'var(--glass-highlight)';
                                e.target.style.borderColor = 'var(--text-secondary)';
                            }}
                            onBlur={(e) => {
                                e.target.style.background = 'var(--glass-bg)';
                                e.target.style.borderColor = 'var(--glass-border)';
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
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                padding: '0 20px',
                                fontSize: '1.1rem',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                transition: 'all 0.2s'
                            }}
                            onFocus={(e) => {
                                e.target.style.background = 'var(--glass-highlight)';
                                e.target.style.borderColor = 'var(--text-secondary)';
                            }}
                            onBlur={(e) => {
                                e.target.style.background = 'var(--glass-bg)';
                                e.target.style.borderColor = 'var(--glass-border)';
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
                            background: 'var(--text-primary)',
                            color: 'var(--bg-dark)',
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
                        <span>Continue</span>
                        <ArrowRight size={20} />
                    </motion.button>
                </form>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        New here? <Link to="/signup" style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}>Create an account</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
