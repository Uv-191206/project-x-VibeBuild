'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/UIComponents';
import { ChevronDown } from 'lucide-react';

const faqs = [
    { q: 'What is VibeBuild?', a: 'VibeBuild is an AI-driven workshop platform where teams collaborate to solve real-world problems using AI and machine learning. Teams work on assigned domains, build solutions, and showcase their projects.' },
    { q: 'How do I submit my project?', a: 'Forward your github repository (public access) link to the coordinator in order to verify your submission and make a request for showcase.' },
    { q: 'What domains are available?', a: 'The workshop covers four AI domains: Healthcare AI, Agriculture AI, Smart Cities, and Education Tech. Each team is pre-assigned a domain to work on.' },
    { q: 'How does the AI Chatbot help?', a: 'The AI Chatbot acts as a static flow diagram guiding users step-by-step through learning how GitHub, Vercel, and Antigravity works.' },
    { q: 'Can I see other teams\' projects?', a: 'Yes! The Showcase page displays all submitted projects publicly. You can view their summaries and explore their GitHub repositories or Live Demos.' },
    { q: 'Who do I contact for help?', a: 'Reach out to the workshop organizers or Student Coordinators directly via the contact links in the Footer.' },
];

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="page-container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="section-title">❓ Frequently Asked Questions</h1>
                <p className="section-subtitle">Everything you need to know about VibeBuild</p>
            </motion.div>

            <div style={{ maxWidth: 750, margin: '0 auto' }}>
                {faqs.map((faq, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                        <motion.div
                            className="clay-card"
                            style={{
                                marginBottom: '1.5rem',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                background: 'white',
                                border: '1px solid var(--border-glass)'
                            }}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            whileHover={{ y: -5, scale: 1.01 }}
                        >
                            <div style={{
                                padding: '1.5rem 2rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: openIndex === i ? 'var(--accent-blue)' : 'var(--text-primary)', transition: 'color 0.3s' }}>{faq.q}</h3>
                                <motion.div
                                    animate={{
                                        rotate: openIndex === i ? 180 : 0,
                                        scale: openIndex === i ? 1.2 : 1
                                    }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                                    style={{
                                        width: 36, height: 36, borderRadius: '50%',
                                        background: openIndex === i ? 'var(--accent-blue)' : '#f0f4ff',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: openIndex === i ? 'white' : 'var(--accent-blue)',
                                        boxShadow: openIndex === i ? '0 5px 15px rgba(72, 52, 212, 0.3)' : 'none'
                                    }}
                                >
                                    <ChevronDown size={22} />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <div style={{
                                            padding: '0 2rem 2rem',
                                            color: 'var(--text-secondary)',
                                            fontSize: '1rem',
                                            lineHeight: 1.7,
                                            fontWeight: 500
                                        }}>
                                            <div style={{
                                                paddingTop: '1.5rem',
                                                borderTop: '2px dashed var(--border-glass)'
                                            }}>
                                                {faq.a}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}
