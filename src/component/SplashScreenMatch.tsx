"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreenMatch({onFinish,}:{onFinish: () => void;}) {
    const [exit, setExit] = useState(false);
    const [step, setStep] = useState(0);

    const router = useRouter();

    useEffect(() => {
        const timer = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 1300),
            setTimeout(() => setStep(3), 2200),
            setTimeout(() => setStep(4), 3200),
            /*setTimeout(() => setExit(true), 4500),*/
        ];
        return () => {
            timer.forEach(clearTimeout);
        };
    }, []);

    function clear() {
        setExit(true);
    }

    return(
        <AnimatePresence onExitComplete={onFinish}>
            {!exit && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[9999] overflow-hidden bg-black"
                >
                    {/* Background Gradient */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-gradient-to-br from-[#2a0050] via-[#7b1fa2] to-[#ff5ca8]"
                    />

                    {/* Glow Background */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ duration: 1.2 }}
                        className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 blur-[140px]"
                    />

                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                    scale: 0,
                                }}
                                animate={{
                                    opacity: [0, 0.8, 0],
                                    y: [-20, -180],
                                    x: [0, Math.random() * 80 - 40],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 4 + Math.random() * 3,
                                    delay: Math.random() * 2,
                                    repeat: Infinity,
                                }}
                                className="absolute h-2 w-2 rounded-full bg-pink-200"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="relative flex h-full items-center justify-center">
                        <div className="relative flex items-center justify-center">

                            {/* Left Profile */}
                            <motion.div
                                initial={{ x: -250, opacity: 0, scale: 0.8 }}
                                animate={{
                                    x: step >= 1 ? (step >= 2 ? -90 : -160) : -250,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative z-20"
                            >
                                <img
                                    src="/girl.jpg"
                                    alt="Girl"
                                    className="h-[110px] w-[110px] rounded-full border-4 border-white object-cover shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                                />
                            </motion.div>

                            {/* Heart */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: step >= 2 ? [0.7, 1.15, 1] : 0,
                                    opacity: step >= 2 ? 1 : 0,
                                }}
                                transition={{
                                    duration: 0.9,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute z-30 flex items-center justify-center"
                            >
                                {/* Heart Glow */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.25, 1],
                                        opacity: [0.4, 0.8, 0.4],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute h-[180px] w-[180px] rounded-full bg-pink-300 blur-[80px]"
                                />

                                {/* Heart Icon */}
                                <motion.img
                                    animate={{
                                        scale: [1, 1.08, 1],
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    src="/heart-logo.png"
                                    alt="Heart"
                                    className="relative h-[120px] w-[120px] drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]"
                                />
                            </motion.div>

                            {/* Right Profile */}
                            <motion.div
                                initial={{ x: 250, opacity: 0, scale: 0.8 }}
                                animate={{
                                    x: step >= 1 ? (step >= 2 ? 90 : 160) : 250,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative z-20"
                            >
                                <img
                                    src="/boy.jpg"
                                    alt="Boy"
                                    className="h-[110px] w-[110px] rounded-full border-4 border-white object-cover shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Match Text */}
                    <AnimatePresence>
                        {step >= 3 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.9,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute left-1/2 top-[18%] z-40 -translate-x-1/2 text-center"
                            >
                                <h1
                                    className="text-6xl font-semibold text-white md:text-7xl"
                                    style={{
                                        fontFamily: "serif",
                                        textShadow: "0 0 30px rgba(255,255,255,0.35)",
                                    }}
                                >
                                    It’s a
                                </h1>

                                <h1
                                    className="text-7xl font-bold text-white md:text-8xl"
                                    style={{
                                        fontFamily: "serif",
                                        textShadow: "0 0 35px rgba(255,255,255,0.4)",
                                    }}
                                >
                                    Match!
                                </h1>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Buttons */}
                    <AnimatePresence>
                        {step >= 4 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute bottom-20 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-4"
                            >
                                <button onClick={()=>{clear(); router.push("/messages")}} className="rounded-full bg-white px-10 py-4 font-medium text-black shadow-[0_0_40px_rgba(255,255,255,0.3)] transition hover:scale-105">
                                    Send a Message
                                </button>

                                <button onClick={()=>clear()} className="text-white/80 transition hover:text-white">
                                    Keep Swiping
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}