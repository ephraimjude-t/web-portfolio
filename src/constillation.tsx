// constilation skills page
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const Constilation = () => {
    return (
        <mesh>
            <meshStandardMaterial attach="material" color="#ffffff" />
            <sphereGeometry args={[1, 32, 32]} />
        </mesh>
    );
};

const Camerascene = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Constilation />
            <OrbitControls />
        </Canvas>
    );
};

export default Camerascene;
