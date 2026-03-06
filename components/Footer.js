'use client';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Heart, Code, GraduationCap, Users } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            position: 'relative', zIndex: 2,
            background: 'white',
            borderTop: '2px solid var(--border-glass)',
            marginTop: '8rem',
            borderRadius: '60px 60px 0 0',
            boxShadow: '0 -20px 40px rgba(0,0,0,0.02)'
        }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 1.5rem 3rem' }}>
                {/* Main Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem',
                }}>
                    {/* About */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h3 style={{
                            fontSize: '1.8rem', fontWeight: 900, marginBottom: '1.25rem',
                            color: 'var(--accent-blue)',
                            letterSpacing: '-1px'
                        }}>
                            ✨ VibeBuild
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 500 }}>
                            AI Driven Solutions & Vibe Coding — A modern workshop platform for building innovative AI-powered projects.
                        </p>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                            Dept. of Electronics & Communication Engineering
                            <br />CSPIT, CHARUSAT University, Changa
                        </div>
                    </motion.div>

                    {/* Faculty Coordinator */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 10 }}>
                            <GraduationCap size={20} color="var(--accent-blue)" /> Faculty Advisor
                        </h4>
                        <div style={{
                            padding: '1.5rem', borderRadius: '24px',
                            background: '#f8faff', border: '1px solid var(--border-glass)',
                            boxShadow: 'var(--clay-shadow-inner)',
                        }}>
                            <p style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: 8, color: 'var(--text-primary)' }}>Prof. Dhara M Patel</p>
                            <a href="mailto:dharampatel.ec@charusat.ac.in" style={{
                                color: 'var(--text-secondary)', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
                                fontWeight: 500
                            }}>
                                <Mail size={14} /> dharampatel.ec@charusat.ac.in
                            </a>
                            <a href="https://www.linkedin.com/in/dhara-patel-839488138/" target="_blank" rel="noopener noreferrer" style={{
                                color: '#0077B5', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700,
                            }}>
                                <Linkedin size={14} /> LinkedIn Profile
                            </a>
                        </div>
                    </motion.div>

                    {/* Student Coordinators */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 10 }}>
                            <Users size={20} color="var(--accent-purple)" /> Student Coordinators
                        </h4>
                        <div style={{ display: 'grid', gap: '1.25rem' }}>
                            {[
                                {
                                    name: 'Jeet Patel',
                                    email: '25ec080@charusat.edu.in',
                                    linkedin: 'https://www.linkedin.com/in/jeet-patel-b393b4238/',
                                    github: 'https://github.com/jeetptl1503'
                                },
                                {
                                    name: 'Yuvrajsinh Rathod',
                                    email: '25ec112@charusat.edu.in',
                                    linkedin: 'https://www.linkedin.com/in/yuvrajsinh-rathod-116533372/',
                                    github: 'https://github.com/Uv-191206'
                                },
                            ].map((coord, i) => (
                                <div key={i} style={{
                                    padding: '1.25rem', borderRadius: '20px',
                                    background: '#f8faff', border: '1px solid var(--border-glass)',
                                    boxShadow: 'var(--clay-shadow-inner)',
                                }}>
                                    <p style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: 6 }}>{coord.name}</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: 8, fontWeight: 500 }}>{coord.email}</p>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: 8 }}>
                                        <a href={coord.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5' }}><Linkedin size={16} /></a>
                                        <a href={coord.github} target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}><Github size={16} /></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    flexWrap: 'wrap', gap: '1.5rem',
                    paddingTop: '2.5rem',
                    borderTop: '2px solid var(--border-glass)'
                }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, fontWeight: 600 }}>
                        © {new Date().getFullYear()} VibeBuild Platform
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
                        <Code size={16} color="var(--accent-blue)" />
                        Built with AI by <a href="https://github.com/Uv-191206" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', fontWeight: 800, textDecoration: 'none' }}>25EC Students</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
