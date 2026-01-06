import { useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleField = ({ color, ...props }) => {
    const ref = useRef();
    const boxRef = useRef();

    // Generate random points in a sphere
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        // Rotate the entire group
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

        // Pulse effect
        const t = state.clock.getElapsedTime();
        boxRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.1);
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]} ref={boxRef}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={color || "#ffffff"}
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const Background3D = () => {
    const { mode } = useSelector((state) => state.theme);
    const bgColor = mode === 'dark' ? '#050505' : '#f0f2f5';
    const particleColor = mode === 'dark' ? '#ffffff' : '#000000';

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: bgColor, transition: 'background 0.3s ease' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleField color={particleColor} />
            </Canvas>
        </div>
    );
};

export default Background3D;
