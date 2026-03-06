'use client';
import { motion } from 'framer-motion';
import { AnimatedCounter, ScrollReveal, GlassCard } from '@/components/UIComponents';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Rocket, Code2, Brain, Users, Trophy, ArrowRight, Sparkles, Zap, Globe } from 'lucide-react';

export default function HomePage() {
  const [stats, setStats] = useState({ totalProjects: 12, totalLOC: 33372 });

  useEffect(() => {
    // Static stat simulation if needed
  }, []);

  return (
    <div className="page-container" style={{ paddingTop: '5rem' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '6rem 0 4rem', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: 'white',
            padding: '4rem 2rem',
            borderRadius: '40px',
            boxShadow: 'var(--clay-shadow-outer), var(--clay-shadow-inner)',
            maxWidth: '900px',
            margin: '0 auto',
            border: '1px solid var(--border-glass)',
            position: 'relative',
            zIndex: 2
          }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            style={{ fontSize: '5rem', marginBottom: '1.5rem', display: 'inline-block' }}
          >
            🚀
          </motion.div>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: 900,
            color: 'var(--accent-blue)',
            lineHeight: 1,
            marginBottom: '1.5rem',
            letterSpacing: '-2px'
          }}>
            VibeBuild
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '1.4rem',
              color: 'var(--text-secondary)',
              maxWidth: 650,
              margin: '0 auto 2.5rem',
              lineHeight: 1.6,
              fontWeight: 500
            }}
          >
            AI Driven Solutions & Vibe Coding Workshop — Master the art of building with AI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/showcase" className="glow-btn" style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: '1.1rem',
              padding: '16px 40px'
            }}>
              <Zap size={20} fill="currentColor" /> Explore Showcase
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Orbs - More "Clay-like" */}
        {[
          { top: '5%', left: '10%', size: 120, delay: 0, color: '#a29bfe' },
          { top: '15%', right: '12%', size: 80, delay: 1, color: '#74b9ff' },
          { bottom: '10%', left: '15%', size: 100, delay: 2, color: '#fab1a0' },
          { bottom: '20%', right: '10%', size: 70, delay: 0.5, color: '#55efc4' },
        ].map((orb, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 8 + i, delay: orb.delay, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              ...orb,
              width: orb.size,
              height: orb.size,
              borderRadius: '50%',
              background: orb.color,
              opacity: 0.15,
              filter: 'blur(40px)',
              zIndex: 1
            }}
          />
        ))}
      </section>

      {/* Features Grid */}
      <ScrollReveal>
        <div style={{ marginBottom: '6rem' }}>
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--accent-blue)' }}>Why VibeBuild?</h2>
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Code2 size={32} />, title: 'Prompt Engineering', desc: 'Learn to talk to AI and get pixel-perfect results every time.' },
              { icon: <Brain size={32} />, title: 'Deep Intelligence', desc: 'Integrate LLMs into your core application logic seamlessly.' },
              { icon: <Users size={32} />, title: 'Collaborative Vibe', desc: 'Build with others in a high-energy, AI-first environment.' },
              { icon: <Sparkles size={32} />, title: 'Custom Designs', desc: 'Seamless user experience with re-usable UI designs.' },
            ].map((feature, i) => (
              <GlassCard key={i} style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  style={{
                    width: 72, height: 72, borderRadius: '24px', margin: '0 auto 1.5rem',
                    background: '#f0f4ff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent-blue)',
                    boxShadow: 'var(--clay-shadow-inner)'
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 12, color: 'var(--text-primary)' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>{feature.desc}</p>
              </GlassCard>
            ))}
          </section>
        </div>
      </ScrollReveal>

      {/* Live Stats */}
      <ScrollReveal delay={0.2}>
        <section style={{ marginBottom: '6rem' }}>
          <h2 className="section-title" style={{ textAlign: 'center', color: 'var(--accent-blue)' }}>📊 Workshop stats</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', fontWeight: 500 }}>surface details of project stats</p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <AnimatedCounter end={stats.totalProjects} label="Submitted Web-Applications" icon="✨" />
            <AnimatedCounter end={stats.totalLOC} label="👏 Lines of Zero Hand written Code.👏" icon="🤖" />
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '4rem 0',
        marginTop: '4rem',
        borderTop: '2px solid var(--border-glass)',
        color: 'var(--text-secondary)',
        background: 'rgba(255,255,255,0.5)',
        borderRadius: '40px 40px 0 0'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent-blue)', marginBottom: '1rem' }}>⚡ VibeBuild</div>
        <p style={{ fontWeight: 600 }}>The New Era of AI-Driven Development</p>
        <p style={{ marginTop: 8, opacity: 0.7 }}>Powered by Claymorphism & Next.js</p>
      </footer>
    </div>
  );
}
