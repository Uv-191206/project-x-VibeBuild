'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Home, Globe, HelpCircle, FileText, Image as ImageIcon } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { href: '/', label: 'Home', icon: Home },
        { href: '/showcase', label: 'Showcase', icon: Globe },
        { href: '/report', label: 'Report', icon: FileText },
        { href: '/faq', label: 'FAQ', icon: HelpCircle },
        { href: '/gallery', label: 'Gallery', icon: ImageIcon },
    ];

    return (
        <nav className="nav-container" style={{
            marginTop: '1rem',
            marginRight: '1rem',
            marginLeft: '1rem',
            borderRadius: '24px',
            top: '1rem',
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: 'var(--clay-shadow-outer), var(--clay-shadow-inner)',
            border: '1px solid var(--border-glass)'
        }}>
            <div className="nav-inner">
                <Link href="/" className="nav-logo" style={{
                    fontSize: '1.6rem',
                    fontWeight: 900,
                    color: 'var(--accent-blue)',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.05)'
                }}>
                    ⚡ VibeBuild
                </Link>

                <div className="nav-links" style={mobileOpen ? {
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: 80, left: 0, right: 0,
                    background: 'white',
                    backdropFilter: 'blur(20px)',
                    padding: '1.5rem',
                    borderRadius: '24px',
                    boxShadow: 'var(--shadow-glow)',
                    zIndex: 100
                } : {}}>
                    {links.map(link => (
                        <Link
                            key={link.href + link.label}
                            href={link.href}
                            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                margin: '0 4px',
                                borderRadius: '14px',
                                padding: '10px 20px',
                                fontWeight: 700,
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                        >
                            <link.icon size={18} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
                            {link.label}
                        </Link>
                    ))}
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--accent-blue)' }}
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
}
