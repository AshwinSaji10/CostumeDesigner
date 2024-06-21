import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center} from "@react-three/drei";

// import { snapshot, useSnapshot } from "valtio";

// import CustomButton from "../components/CustomButton";

import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";
import Shirt from "./Shirt";

const CanvasModel = () => {

  // const snap = useSnapshot(state);
    return (
        <Canvas
          shadows
          camera={{position:[0,0,3],fov:25}}
        
        >
            <ambientLight intensity="0.5" />
            <Environment preset="city" />
            <CameraRig>
            <Backdrop/>
            {/* <CustomButton title="Back" onClick={()=>state.intro=false}/> */}
            <Center>
                <Shirt />
            </Center>
            </CameraRig>
        </Canvas>
    );
};

export default CanvasModel;
