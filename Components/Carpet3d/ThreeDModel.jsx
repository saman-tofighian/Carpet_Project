import { useGLTF } from '@react-three/drei';

function ThreeDModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

export default ThreeDModel;
