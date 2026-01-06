import React, { useState, useEffect } from 'react';
import { Search, X, Calendar, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    // Mock results
    const allResults = [
        { id: 1, type: 'event', title: 'Tech Talk 2024', path: '/events' },
        { id: 2, type: 'event', title: 'StartUp Weekend', path: '/events' },
        { id: 3, type: 'group', title: 'React Developers', path: '/groups' },
        { id: 4, type: 'group', title: 'Data Science Club', path: '/groups' },
        { id: 5, type: 'page', title: 'My Profile', path: '/profile' },
        { id: 6, type: 'page', title: 'Dashboard', path: '/' },
    ];

    const filteredResults = query
        ? allResults.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
        : [];

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                // Toggle logic handled by parent usually, but here preventing default
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;

    const handleResultClick = (path) => {
        navigate(path);
        onClose();
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.2)',
            backdropFilter: 'blur(5px)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '15vh'
        }} onClick={onClose}>
            <div 
                className="glass-panel animate-fade-in"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    padding: '0',
                    overflow: 'hidden',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
                onClick={e => e.stopPropagation()}
            >
                {/* Search Header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px 20px',
                    borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}>
                    <Search color="var(--text-secondary)" size={20} />
                    <input
                        autoFocus
                        type="text"
                        placeholder="Search events, groups, or pages..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            width: '100%',
                            marginLeft: '12px',
                            fontSize: '1.1rem',
                            color: 'var(--text-primary)',
                            outline: 'none'
                        }}
                    />
                    <div style={{ 
                        padding: '4px 8px', 
                        borderRadius: '6px', 
                        background: 'var(--bg-tertiary)', 
                        color: 'var(--text-secondary)',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                    }}>ESC</div>
                </div>

                {/* Results Area */}
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {query && filteredResults.length > 0 && (
                        <div style={{ padding: '8px' }}>
                            <div style={{ padding: '8px 12px', fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Top Hits</div>
                            {filteredResults.map((result) => (
                                <div
                                    key={result.id}
                                    onClick={() => handleResultClick(result.path)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '10px 12px',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        transition: 'background 0.1s ease'
                                    }}
                                    className="search-result-item"
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: result.type === 'event' ? 'rgba(52, 199, 89, 0.1)' : result.type === 'group' ? 'rgba(0, 113, 227, 0.1)' : 'rgba(142, 142, 147, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '12px'
                                    }}>
                                        {result.type === 'event' && <Calendar size={16} color="var(--accent-success)" />}
                                        {result.type === 'group' && <Users size={16} color="var(--accent-primary)" />}
                                        {result.type === 'page' && <Search size={16} color="var(--text-secondary)" />}
                                    </div>
                                    <span style={{ fontSize: '0.95rem', fontWeight: 500, flex: 1 }}>{result.title}</span>
                                    <ArrowRight size={14} style={{ opacity: 0.5 }} />
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {query && filteredResults.length === 0 && (
                        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                            No results found for "{query}"
                        </div>
                    )}

                    {!query && (
                        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Start typing to search...
                        </div>
                    )}
                </div>
            </div>
             <style>{`
                .search-result-item:hover {
                    background-color: var(--accent-primary) !important;
                    color: white !important;
                }
                .search-result-item:hover svg {
                    color: white !important;
                }
            `}</style>
        </div>
    );
};

export default SearchModal;
