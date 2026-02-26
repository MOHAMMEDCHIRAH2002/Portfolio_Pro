"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    id?: string;
}

export function Section({ title, children, id }: SectionProps) {
    return (
        <motion.section
            id={id}
            className="py-16 md:py-24 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
        >
            <div className="flex flex-col items-start mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground flex items-center group">
                    <span className="text-accent opacity-0 -ml-6 mr-2 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0">{'>'}</span>
                    {title}
                    <span className="ml-4 h-[1px] bg-border w-24 md:w-64 block"></span>
                </h2>
            </div>

            <div className="w-full">
                {children}
            </div>
        </motion.section>
    );
}
