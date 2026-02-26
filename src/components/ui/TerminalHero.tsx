"use client";

import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalHeroProps {
    command: string;
    output: string | React.ReactNode;
}

export const TerminalHero: React.FC<TerminalHeroProps> = ({ command, output }) => {
    const [typedCommand, setTypedCommand] = useState('');
    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        let currentCommand = '';
        let currIndex = 0;

        // reset
        setTypedCommand('');
        setShowOutput(false);

        const typingInterval = setInterval(() => {
            if (currIndex < command.length) {
                currentCommand += command[currIndex];
                setTypedCommand(currentCommand);
                currIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => setShowOutput(true), 400); // slight delay before output
            }
        }, 80); // typing speed, slightly faster for better feel

        return () => clearInterval(typingInterval);
    }, [command]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl premium-glass rounded-xl overflow-hidden shadow-2xl box-glow mb-12 relative z-10"
        >
            {/* Terminal Title Bar */}
            <div className="flex items-center px-4 py-3 bg-neutral-900/80 border-b border-border/50 backdrop-blur-md">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(0,255,65,0.5)]"></div>
                </div>
                <div className="mx-auto flex items-center text-xs text-muted-foreground font-mono opacity-60">
                    <Terminal className="w-3 h-3 mr-2" />
                    bash - guest@portfolio
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 md:p-8 font-mono text-sm md:text-base leading-relaxed h-[220px] md:h-[280px] overflow-y-auto no-scrollbar relative bg-black/40">
                <div className="flex text-foreground">
                    <span className="text-accent mr-3 select-none">guest@portfolio:~$</span>
                    <span>
                        {typedCommand}
                        {!showOutput && <span className="inline-block w-2.5 h-4 ml-1 bg-accent animate-blink align-middle shadow-[0_0_8px_rgba(0,255,65,0.8)]"></span>}
                    </span>
                </div>

                <AnimatePresence>
                    {showOutput && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mt-4 text-muted-foreground"
                        >
                            <div className="pl-2 border-l border-accent/30 py-2">
                                {output}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 flex text-foreground"
                            >
                                <span className="text-accent mr-3 select-none">guest@portfolio:~$</span>
                                <span className="inline-block w-2.5 h-4 ml-1 bg-accent animate-blink align-middle shadow-[0_0_8px_rgba(0,255,65,0.8)]"></span>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Subtle internal scanline overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] opacity-20 z-10"></div>
            </div>
        </motion.div>
    );
};
