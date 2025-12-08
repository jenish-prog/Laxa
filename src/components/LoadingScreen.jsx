import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
                >
                    <div className="w-full max-w-md px-8 flex flex-col items-center gap-8">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl font-bold tracking-tighter"
                        >
                            laxa.
                        </motion.div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                            {/* Animated Progress Bar */}
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1]
                                }}
                                className="absolute top-0 left-0 h-full bg-white"
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-xs uppercase tracking-[0.2em] text-white/50"
                        >
                            Loading Experience
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
