'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export function AnimatedCounter({ end, duration = 2, label, icon }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [inView, end, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="clay-card"
            style={{
                padding: '2.5rem',
                textAlign: 'center',
                flex: 1,
                minWidth: 260,
                background: 'white',
                border: '1px solid var(--border-glass)'
            }}
        >
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{icon}</div>
            <div style={{
                fontSize: '3rem', fontWeight: 900,
                color: 'var(--accent-blue)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.05)'
            }}>
                {label === 'Attendance' ? `${count}%` : count}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: 8, fontWeight: 700 }}>{label}</div>
        </motion.div>
    );
}

export function ScrollReveal({ children, delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
        >
            {children}
        </motion.div>
    );
}

export function GlassCard({ children, style, hover = true, ...props }) {
    return (
        <motion.div
            className="clay-card"
            whileHover={hover ? {
                y: -10,
                scale: 1.02,
                boxShadow: '0 25px 50px -12px rgba(108, 92, 231, 0.2), var(--clay-shadow-inner)'
            } : {}}
            style={{
                padding: '2rem',
                background: 'white',
                ...style
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function SkeletonCard() {
    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div className="skeleton" style={{ height: 20, width: '60%', marginBottom: 12 }} />
            <div className="skeleton" style={{ height: 14, width: '40%', marginBottom: 16 }} />
            <div className="skeleton" style={{ height: 60, width: '100%', marginBottom: 12 }} />
            <div style={{ display: 'flex', gap: 8 }}>
                <div className="skeleton" style={{ height: 24, width: 60 }} />
                <div className="skeleton" style={{ height: 24, width: 60 }} />
                <div className="skeleton" style={{ height: 24, width: 60 }} />
            </div>
        </div>
    );
}
