import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { Rocket, Search, Bell, LogOut, LayoutGrid, Calendar, Users } from 'lucide-react';
import SearchModal from './SearchModal';
import NotificationCenter from './NotificationCenter';

const Navbar = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isNotifOpen, setIsNotifOpen] = useState(false);

    // Global keyboard shortcut for search
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const navLinks = [
        { name: 'Dashboard', path: '/', icon: LayoutGrid },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Groups', path: '/groups', icon: Users },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100,
                width: 'auto',
                maxWidth: '90%',
            }}>
                <div className="glass-panel" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    padding: '8px 12px 8px 24px',
                    borderRadius: '100px',
                    borderColor: 'rgba(255,255,255,0.08)'
                }}>
                    {/* Logo Section */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                        <div style={{ background: '#fff', borderRadius: '50%', padding: '6px', display: 'flex' }}>
                            <Rocket size={16} color="#000" fill="#000" />
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.02em', color: '#fff' }}>CampusConnect</span>
                    </Link>

                    {isAuthenticated && <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />}

                    {/* Navigation Pills */}
                    {isAuthenticated && (
                        <div style={{ display: 'flex', gap: '4px' }}>
                            {navLinks.map((link) => {
                                const active = isActive(link.path);
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        style={{
                                            padding: '10px 16px',
                                            borderRadius: '100px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            fontSize: '0.85rem',
                                            fontWeight: 500,
                                            color: active ? '#000' : 'rgba(255,255,255,0.7)',
                                            background: active ? '#fff' : 'transparent',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
                                        }}
                                    >
                                        <Icon size={16} strokeWidth={2.5} />
                                        <span>{link.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}

                    {isAuthenticated && <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />}

                    {/* Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {isAuthenticated ? (
                            <>
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                                    onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                                >
                                    <Search size={18} />
                                </button>

                                <div style={{ position: 'relative' }}>
                                    <button
                                        onClick={() => setIsNotifOpen(!isNotifOpen)}
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '40px',
                                            height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                                        onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                                    >
                                        <Bell size={18} />
                                        <span style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            width: '6px',
                                            height: '6px',
                                            backgroundColor: '#ff4d4d',
                                            borderRadius: '50%',
                                        }} />
                                    </button>
                                    <NotificationCenter isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
                                </div>

                                <Link to="/profile" style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #fff, #999)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#000',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    textDecoration: 'none'
                                }}>
                                    {user?.username?.[0]?.toUpperCase() || 'U'}
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        padding: '0 8px',
                                        color: 'rgba(255,255,255,0.4)',
                                        cursor: 'pointer',
                                        transition: 'color 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#fff'}
                                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
                                >
                                    <LogOut size={18} />
                                </button>
                            </>
                        ) : (
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <Link to="/login" style={{
                                    background: isActive('/login') ? '#fff' : 'transparent',
                                    color: isActive('/login') ? '#000' : 'rgba(255,255,255,0.8)',
                                    borderRadius: '100px',
                                    padding: '8px 20px',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: isActive('/login') ? 600 : 500,
                                    transition: 'all 0.3s ease'
                                }}>Log in</Link>
                                <Link to="/signup" style={{
                                    background: isActive('/signup') ? '#fff' : 'transparent',
                                    color: isActive('/signup') ? '#000' : 'rgba(255,255,255,0.8)',
                                    borderRadius: '100px',
                                    padding: '8px 20px',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: isActive('/signup') ? 600 : 500,
                                    transition: 'all 0.3s ease'
                                }}>Sign up</Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Navbar;
