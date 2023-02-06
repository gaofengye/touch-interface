import { useGLTF } from "@react-three/drei";
import { FC } from "react";

type Props = {
  scale: number;
};

const Car: FC<Props> = (props) => {
  const { scene } = useGLTF("/bmw_m4_competition_m_package.glb");

  return <primitive object={scene} {...props} />;
};

export default Car;
