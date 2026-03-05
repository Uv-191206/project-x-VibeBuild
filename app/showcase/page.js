'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard, ScrollReveal, SkeletonCard } from '@/components/UIComponents';
import { Globe, Github, ExternalLink, Search, Layers, BookOpen, Code2 } from 'lucide-react';

const DOMAINS = ['All'];

const STATIC_PROJECTS = [
    {
        _id: 'vb',
        title: 'VibeBuild Platform',
        userName: 'Admin Team',
        domain: 'Workshop Platform',
        problemStatement: 'Centralized hub for AI workshops and project showcases',
        description: 'A comprehensive platform for managing AI-driven workshops, featuring project submissions, automated certificate generation, and an AI-powered helper bot.',
        techStack: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion'],
        githubUrl: 'https://github.com/Uv-191206/project-x-VibeBuild.git',
        liveUrl: 'https://project-x-vibe-build.vercel.app/'
    },
    {
        _id: '1',
        title: 'Digital Bridge Project',
        userName: 'Yogi',
        domain: 'Cloud Services',
        problemStatement: 'Simplifying digital infrastructure for modern businesses',
        description: 'A robust cloud service platform designed to bridge the gap between traditional infrastructure and modern digital solutions.',
        techStack: ['React', 'Vite', 'Tailwind CSS'],
        githubUrl: 'https://github.com/Uv-191206/clone-yogi-1-digital-bridge-project.git',
        liveUrl: 'https://clone-yogi-1-digital-bridge-project.vercel.app/'
    },
    {
        _id: '2',
        title: 'Creative Agency Portal',
        userName: 'Smeet',
        domain: 'Portfolio',
        problemStatement: 'Showcasing high-end digital agency work with premium aesthetics',
        description: 'A high-performance portfolio site for creative agencies, focusing on smooth animations and visual excellence.',
        techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
        githubUrl: 'https://github.com/Uv-191206/clone-smeet-project.git',
        liveUrl: 'https://clone-smeet-project.vercel.app/'
    },
    {
        _id: '3',
        title: 'Health-Tech Dashboard',
        userName: 'Prashant',
        domain: 'Healthcare',
        problemStatement: 'Modernizing patient data management with intuitive UI',
        description: 'An advanced healthcare dashboard for tracking patient metrics and streamlining clinical workflows.',
        techStack: ['React', 'Node.js', 'PostgreSQL'],
        githubUrl: 'https://github.com/Uv-191206/clone-prashant-project.git',
        liveUrl: 'https://clone-prashant-project.vercel.app/'
    },
    {
        _id: '4',
        title: 'E-Commerce Innovation',
        userName: 'Hitansh',
        domain: 'E-Commerce',
        problemStatement: 'Optimizing checkout flows for higher conversion rates',
        description: 'A next-generation e-commerce platform featuring seamless product discovery and ultra-fast checkout.',
        techStack: ['Remix', 'Shopify API', 'Tailwind CSS'],
        githubUrl: 'https://github.com/Uv-191206/clone-hitansh-project.git',
        liveUrl: 'https://clone-hitansh-project.vercel.app/'
    },
    {
        _id: '5',
        title: 'BharatAgri-AI',
        userName: 'Yuvraj & Jeet',
        domain: 'Agriculture AI',
        problemStatement: 'Empowering farmers with AI-driven crop insights',
        description: 'Smart agriculture platform using AI to predict soil health and optimize crop yields for sustainable farming.',
        techStack: ['Python', 'FastAPI', 'Next.js', 'TensorFlow'],
        githubUrl: 'https://github.com/jeetptl1503/BharatAgri-AI.git',
        liveUrl: 'https://bharatagri-ai.vercel.app/'
    },
    {
        _id: '6',
        title: 'Data-Driven Insights',
        userName: 'Dev',
        domain: 'Data Analytics',
        problemStatement: 'Visualizing complex data sets for better decision making',
        description: 'A comprehensive data analytics suite providing real-time insights and beautiful visualizations for complex business metrics.',
        techStack: ['React', 'D3.js', 'Supabase'],
        githubUrl: 'https://github.com/Uv-191206/clone-dev-data.git',
        liveUrl: '' // Currently facing errors
    },
    {
        _id: '7',
        title: 'Modern Workspaces',
        userName: 'Rohan',
        domain: 'SaaS',
        problemStatement: 'Improving remote team productivity via unified tools',
        description: 'A collaborative workspace application designed for the modern remote workforce, integrating chat, tasks, and files.',
        techStack: ['Next.js', 'Socket.io', 'MongoDB'],
        githubUrl: 'https://github.com/Uv-191206/clone-rohan_testproj12.git',
        liveUrl: 'https://clone-rohan-testproj12.vercel.app/'
    },
    {
        _id: '8',
        title: 'Supreme Education',
        userName: 'Harsh',
        domain: 'Ed-Tech',
        problemStatement: 'Expanding access to premium educational resources',
        description: 'An interactive learning platform providing high-quality educational content and tracking student progress.',
        techStack: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        githubUrl: 'https://github.com/Uv-191206/clone-harsh-supreme-education-website.git',
        liveUrl: 'https://clone-harsh-supreme-education-websi.vercel.app/'
    },
    {
        _id: '9',
        title: 'VeriLearn Platform',
        userName: 'Pransu',
        domain: 'Ed-Tech',
        problemStatement: 'Verifying student credentials on the blockchain',
        description: 'A secure education platform that leverages blockchain technology to verify and store academic achievements.',
        techStack: ['React', 'Ethereum', 'Web3.js'],
        githubUrl: 'https://github.com/Uv-191206/clone-verilearn-pransu.git',
        liveUrl: 'https://clone-verilearn-pransu.vercel.app/'
    },
    {
        _id: '10',
        title: 'Academic Hub',
        userName: 'Richa',
        domain: 'Education',
        problemStatement: 'Centralizing research papers and academic collaborations',
        description: 'A collaborative platform for students and researchers to share knowledge and work on academic projects.',
        techStack: ['Angular', 'Node.js', 'Express'],
        githubUrl: 'https://github.com/Uv-191206/clone-academic_hub-richa.git',
        liveUrl: 'https://clone-academic-hub-richa.vercel.app/'
    },
    {
        _id: '11',
        title: 'SkillBridge Career Path',
        userName: 'Vraj & Yash',
        domain: 'Career Tech',
        problemStatement: 'Bridging the skill gap for fresh graduates',
        description: 'An AI-powered career counselor that identifies skill gaps and recommends personalized learning paths.',
        techStack: ['Lovable AI', 'Supabase', 'React'],
        githubUrl: '',
        liveUrl: 'https://skillbridge-career-path.lovable.app/dashboard'
    }
];

export default function ShowcasePage() {
    const [search, setSearch] = useState('');
    const [domainFilter, setDomainFilter] = useState('All');

    const filtered = STATIC_PROJECTS.filter(p => {
        const matchSearch = !search || p.title?.toLowerCase().includes(search.toLowerCase()) || p.description?.toLowerCase().includes(search.toLowerCase()) || p.userName?.toLowerCase().includes(search.toLowerCase());
        const matchDomain = domainFilter === 'All' || p.domain === domainFilter;
        return matchSearch && matchDomain;
    });

    return (
        <div className="page-container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="section-title">🌍 Project Showcase</h1>
                <p className="section-subtitle">Explore AI innovations built by our participants</p>
            </motion.div>

            {/* Controls */}
            <ScrollReveal>
                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '24px',
                    boxShadow: 'var(--clay-shadow-outer), var(--clay-shadow-inner)',
                    border: '1px solid var(--border-glass)'
                }}>
                    <div style={{ position: 'relative', flex: '1 1 300px' }}>
                        <Search size={20} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-blue)' }} />
                        <input
                            className="glow-input"
                            placeholder="Search projects by name, tech, or author..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{ paddingLeft: 48, background: '#f8faff' }}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-secondary)', marginRight: 4, display: 'flex', alignItems: 'center' }}>
                            <Layers size={18} style={{ marginRight: 6 }} /> Filter:
                        </span>
                        {DOMAINS.map(d => (
                            <button key={d} onClick={() => setDomainFilter(d)}
                                style={{
                                    padding: '10px 20px', borderRadius: 14, cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem',
                                    border: 'none',
                                    background: domainFilter === d ? 'var(--accent-blue)' : '#f0f4ff',
                                    color: domainFilter === d ? 'white' : 'var(--accent-blue)',
                                    boxShadow: domainFilter === d ? '0 4px 12px rgba(72, 52, 212, 0.3)' : 'inset 2px 2px 4px rgba(0,0,0,0.02)',
                                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                }}>
                                {d}
                            </button>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* Projects Grid */}
            {filtered.length === 0 ? (
                <GlassCard style={{ textAlign: 'center', padding: '3rem' }}>
                    <Globe size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
                    <h3 style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>No projects found</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        Try adjusting your search or filter
                    </p>
                </GlassCard>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.25rem' }}>
                    {filtered.map((project, i) => (
                        <ScrollReveal key={project._id || i} delay={i * 0.05}>
                            <GlassCard style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                    <div>
                                        <h3 style={{ fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>{project.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: '2px 0' }}>{project.userName}</p>
                                    </div>
                                    <span className="badge">{project.domain}</span>
                                </div>

                                {project.problemStatement && (
                                    <div style={{
                                        padding: '8px 12px', borderRadius: 10, marginBottom: '0.75rem',
                                        background: 'rgba(99,102,241,0.04)', border: '1px solid rgba(99,102,241,0.1)',
                                        fontSize: '0.82rem', color: 'var(--accent-blue)',
                                    }}>
                                        <BookOpen size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                                        {project.problemStatement}
                                    </div>
                                )}

                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', flex: 1, lineHeight: 1.6, margin: '0 0 0.75rem' }}>
                                    {project.description?.length > 160 ? project.description.slice(0, 160) + '...' : project.description}
                                </p>

                                {project.techStack?.length > 0 && (
                                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                                        {project.techStack.map((t, j) => (
                                            <span key={j} style={{
                                                padding: '3px 10px', borderRadius: 12, fontSize: '0.72rem', fontWeight: 500,
                                                background: 'rgba(139,92,246,0.07)', color: '#7c3aed',
                                            }}>{t}</span>
                                        ))}
                                    </div>
                                )}

                                <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                padding: '8px 14px', borderRadius: 10, textDecoration: 'none', fontSize: '0.82rem',
                                                background: 'rgba(0,0,0,0.04)', color: 'var(--text-primary)', fontWeight: 500,
                                                display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s',
                                            }}>
                                            <Github size={14} /> GitHub
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                padding: '8px 14px', borderRadius: 10, textDecoration: 'none', fontSize: '0.82rem',
                                                background: 'var(--accent-blue)', color: 'white', fontWeight: 500,
                                                display: 'flex', alignItems: 'center', gap: 6,
                                            }}>
                                            <ExternalLink size={14} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </GlassCard>
                        </ScrollReveal>
                    ))}
                </div>
            )}
        </div>
    );
}
