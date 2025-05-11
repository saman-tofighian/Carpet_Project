import { useGLTF } from '@react-three/drei';

function ThreeDModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return (
    <primitive
      object={scene}
      rotation={[-3, Math.PI / 2.4, 1]}
      position={[0, -0.8, 0]}
      scale={1.5}
    />
  );
}

export default ThreeDModel;
