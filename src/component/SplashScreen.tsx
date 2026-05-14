"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function SplashScreen({onFinish,}:{onFinish: () => void;}) {

    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true);
        }, 4000); // Splash screen will be visible for 4 seconds

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    const particles = [
        { left: "12%", top: "82%", xMove: -20, duration: 4, delay: 1 },
        { left: "25%", top: "76%", xMove: 15, duration: 5, delay: 1.2 },
        { left: "38%", top: "88%", xMove: -10, duration: 4.5, delay: 1.4 },
        { left: "52%", top: "79%", xMove: 25, duration: 5.5, delay: 1.1 },
        { left: "67%", top: "84%", xMove: -15, duration: 4.8, delay: 1.5 },
        { left: "81%", top: "75%", xMove: 20, duration: 5.2, delay: 1.3 },
        { left: "91%", top: "86%", xMove: -18, duration: 4.9, delay: 1.7 },
        { left: "7%", top: "72%", xMove: 12, duration: 5.1, delay: 1.6 },
    ];

    return (
        <AnimatePresence
            onExitComplete={() => {
                onFinish();
            }}>
            {!exit && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration:0.8}}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white text-6xl"
                >
                 {/* Background */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#12001f] via-[#5a1794] to-[#ff5ca8]"
                />
                {/* Ambient glow top */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.3, duration: 1.2 }}
                    className="absolute top-[-100px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-pink-400 blur-[140px]"
                />

                {/* Center glow */}
                <motion.div
                    initial={{ scale: 0.2, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0.45 }}
                    transition={{
                    delay: 0.7,
                    duration: 1.3,
                    ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300 blur-[120px]"
                />

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {particles.map((particle, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                y: [-20, -120],
                                x: [0, particle.xMove],
                            }}
                            transition={{
                                duration: particle.duration,
                                delay: particle.delay,
                                repeat: Infinity,
                            }}
                            className="absolute h-2 w-2 rounded-full bg-pink-200"
                            style={{
                                left: particle.left,
                                top: particle.top,
                            }}
                        />
                    ))}
                </div>

                {/* Main content */}
                <div className="relative flex h-full items-center justify-center">
                    <div className="flex flex-col items-center">
                        <motion.img
                            src="/heart-logo.png"
                            alt="Juyde Logo"
                            initial={{ scale: 1, opacity: 0, y:10,}}
                            animate={{ scale: 1, opacity: 1, y:0, }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], }}
                            className="h-[150px] w-[150px] drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]"
                        />

                        {/* Text */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24, }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.9, ease: [0.22, 1, 0.36, 1], }}
                            className="text-6xl font-semibold tracking-tight text-white"
                            style={{fontFamily: "serif", textShadow: "0 0 25px rgba(255,255,255,0.25)",}}
                        >
                            Juyde
                        </motion.h1>
                    </div>
                </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}