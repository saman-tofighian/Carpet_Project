import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

export default function Model3d() {
  const model = useGLTF('./ct.glb');
  model.scene.rotation.set(1.5, 3, 0);
  return (
    <>
      <OrbitControls makeDefault minDistance={5} maxDistance={7} />
      <Stage>
        <primitive object={model.scene} scale={1.8} position={[0, 1, 0]} />
      </Stage>
    </>
  );
}
