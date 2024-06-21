import React from "react";

import CustomButton from "../components/CustomButton";

import { motion, AnimatePresence } from "framer-motion";
import { snapshot, useSnapshot } from "valtio";

import state from "../store";

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from "../config/motion";

const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation("left")}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src="./threejs.png"
                            alt="logo"
                            className="w-8 h-8 object-contain"
                        ></img>
                    </motion.header>
                    <motion.div
                        className="home-content"
                        {...headContainerAnimation}
                    >
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">Example</h1>
                        </motion.div>
                        <motion.div {...headContentAnimation}>
                            <p>Example text</p>
                        </motion.div>
                    </motion.div>
                    <CustomButton
                        title="Start designing"
                        handleClick={() => (state.intro = false)}
                    />
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Home;
