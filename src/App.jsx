import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import Dashboard from './pages/Dashboard';
import EventsList from './features/events/EventsList';
import GroupFinder from './features/groups/GroupFinder';
import Profile from './pages/Profile';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

// Protected Route Component
const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
    const { mode } = useSelector((state) => state.theme);

    useEffect(() => {
        document.body.setAttribute('data-theme', mode);
    }, [mode]);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    <Route path="/" element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } />

                    <Route path="/events" element={
                        <PrivateRoute>
                            <EventsList />
                        </PrivateRoute>
                    } />

                    <Route path="/groups" element={
                        <PrivateRoute>
                            <GroupFinder />
                        </PrivateRoute>
                    } />

                    <Route path="/profile" element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    } />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
