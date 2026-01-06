import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createGroup } from './groupsSlice';
import { Plus, Users, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GroupFinder = () => {
    const { groups } = useSelector((state) => state.groups);
    const dispatch = useDispatch();
    const [showCreate, setShowCreate] = useState(false);
    const [newGroup, setNewGroup] = useState({ name: '', topic: '' });

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(createGroup(newGroup));
        setShowCreate(false);
        setNewGroup({ name: '', topic: '' });
    };

    return (
        <div style={{ paddingBottom: '4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                <div>
                    <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem', background: 'linear-gradient(to right, #fff, #999)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Groups</h1>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem' }}>Connect with peers pursuing similar interests.</p>
                </div>
                <button
                    onClick={() => setShowCreate(!showCreate)}
                    style={{
                        padding: '12px 24px',
                        borderRadius: '100px',
                        background: '#fff',
                        color: '#000',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer'
                    }}
                >
                    <Plus size={18} />
                    {showCreate ? 'Cancel' : 'New Group'}
                </button>
            </div>

            <AnimatePresence>
                {showCreate && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginBottom: '3rem' }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        className="glass-panel"
                        style={{ padding: '32px', maxWidth: '600px', margin: '0 auto', overflow: 'hidden' }}
                    >
                        <h3 style={{ marginBottom: '24px', fontSize: '1.5rem', color: '#fff' }}>Start a New Group</h3>
                        <form onSubmit={handleCreate}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Group Name</label>
                                <input
                                    placeholder="e.g. Advanced AI Study Circle"
                                    value={newGroup.name}
                                    onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '12px',
                                        color: '#fff',
                                        fontSize: '1rem',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '32px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Topic</label>
                                <input
                                    placeholder="e.g. Computer Science"
                                    value={newGroup.topic}
                                    onChange={(e) => setNewGroup({ ...newGroup, topic: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '12px',
                                        color: '#fff',
                                        fontSize: '1rem',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                                <button type="button" onClick={() => setShowCreate(false)} style={{ background: 'transparent', color: 'rgba(255,255,255,0.6)', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>Cancel</button>
                                <button type="submit" style={{ background: '#fff', color: '#000', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: 600, cursor: 'pointer' }}>Create Group</button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
                {groups.map((group, idx) => (
                    <motion.div
                        key={group.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-panel"
                        style={{ padding: '24px', transition: 'transform 0.3s' }}
                        whileHover={{ y: -5 }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Users size={24} color="#fff" />
                            </div>
                            <span style={{
                                fontSize: '0.85rem',
                                color: 'rgba(255,255,255,0.8)',
                                background: 'rgba(255,255,255,0.05)',
                                padding: '6px 12px',
                                borderRadius: '100px',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {group.members} Members
                            </span>
                        </div>

                        <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#fff' }}>{group.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', fontSize: '1rem' }}>
                            <Hash size={16} />
                            <span>{group.topic}</span>
                        </div>

                        <button style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '12px',
                            background: 'transparent',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.3)',
                            fontSize: '1rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>Join Group</button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default GroupFinder;
