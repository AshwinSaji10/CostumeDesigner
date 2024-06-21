import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { snapshot, useSnapshot } from "valtio";
import config from "../config/config";
import state from "../store";

import { download } from "../assets";

import { downloadCanvasToImage, reader } from "../config/helpers";

import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";

import { fadeAnimation, slideAnimation } from "../config/motion";
import CustomButton from "../components/CustomButton";

const Customizer = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                    <motion.div
                        className="fixed z-10"
                        {...slideAnimation("left")}
                    ></motion.div>
                    <motion.div
                        className="absolute z-20 top-5 right-5 px-5 py-5 w-fit"
                        {...fadeAnimation}
                    >
                        <CustomButton
                            title="Back"
                            handleClick={() => (state.intro = true)}
                        />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Customizer;
