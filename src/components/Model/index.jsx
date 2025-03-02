import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

useGLTF.preload("/robot_playground.glb");

export default function Model() {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot_playground.glb"
  );
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const action = actions["Experiment"];
    action.play();
    action.setLoop(THREE.LoopRepeat);

    return () => {
      action.stop();
    };
  }, [actions]);

  return (
    <group ref={group} scale={[1.2, 1.2, 1.2]} position={[0, -1, 0]}>
      <primitive object={scene} />
    </group>
  );
}
