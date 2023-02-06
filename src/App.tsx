import React, { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage } from "@react-three/drei";
import styles from "./App.module.scss";
import Car from "@components/Car";
import Map from "@components/Map";

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.canvas}>
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
          <color attach="background" args={["#101010"]} />
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={"sunset"}>
              <Car scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>

      <div className={styles.map}>
        <Map />
      </div>
    </div>
  );
}

export default memo(App);
