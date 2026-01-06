import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Background3D from './Background3D';
import Lenis from '@studio-freight/lenis';

const Layout = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="layout-wrapper" style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden' }}>
            <Background3D />
            <Navbar />
            <main style={{
                position: 'relative',
                zIndex: 10,
                paddingTop: '100px',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ flex: 1, width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '0 2rem' }}>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
