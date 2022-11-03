import * as React from "react";
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
} from "framer-motion";

export const Progress = () => {
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    return (
        <>
            <svg className="progress-icon" viewBox="0 0 45 45" style={{height:"50px"}}>
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke="#7389ae"
                    strokeDasharray="0 1"
                    d="M 1,20
                       a 10 10, 0, 1 1, 40 0
                       a 10 10, 0, 1 1, -40 0"
                    style={{
                        pathLength,
                        rotate: 90,
                        translateX: 2,
                        translateY: 2,
                    }}
                />
            </svg>
            <i className="fas fa-chevron-circle-down" ></i>
        </>
    );
};
