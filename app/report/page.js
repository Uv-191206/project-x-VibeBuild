'use client';
import { motion } from 'framer-motion';
import { FileText, Clock } from 'lucide-react';
import { GlassCard } from '@/components/UIComponents';

export default function ReportPage() {
    return (
        <div className="page-container" style={{ paddingTop: '8rem', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div style={{
                    width: 80, height: 80, borderRadius: '24px',
                    background: 'var(--accent-blue-soft)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 2rem', color: 'var(--accent-blue)',
                    boxShadow: 'var(--clay-shadow-inner)'
                }}>
                    <FileText size={40} />
                </div>

                <h1 className="section-title">Event Report</h1>
                <p className="section-subtitle">Official documentation of the AI-Driven Solutions & VibeCoding Workshop</p>

                <GlassCard style={{ maxWidth: 600, margin: '4rem auto', padding: '4rem 2rem' }}>
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        style={{ display: 'inline-block', marginBottom: '1.5rem' }}
                    >
                        <Clock size={48} color="var(--accent-blue)" opacity={0.6} />
                    </motion.div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Coming Soon</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        We are currently compiling the full report of the entire event.
                        The PDF will be available for viewing and download here shortly.
                    </p>
                </GlassCard>
            </motion.div>
        </div>
    );
}
