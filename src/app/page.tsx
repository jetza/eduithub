'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, BookOpen, Newspaper, Users, Mail } from 'lucide-react';
import { Home as HomeIcon } from 'lucide-react';
import Link from 'next/link';
import "./page.scss";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const sections = [
    { id: 'home', title: 'Početna', icon: HomeIcon },
    { id: 'services', title: 'Usluge', icon: BookOpen },
    { id: 'blog', title: 'Blog', icon: Newspaper },
    { id: 'about', title: 'O nama', icon: Users },
    { id: 'contact', title: 'Kontakt', icon: Mail },
];

const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
];

const services = [
    { id: 1, name: "Online kursevi" },
    { id: 2, name: "Mentorstvo" },
    { id: 3, name: "Radionice" },
    { id: 4, name: "Sertifikacija" },
];

const blogPosts = [
    { id: 1, title: "Blog Naslov 1" },
    { id: 2, title: "Blog Naslov 2" },
    { id: 3, title: "Blog Naslov 3" },
];

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [isNavOpen] = useState(true);
    const [theme, setTheme] = useState('dark');

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            sections.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop - 100 &&
                        scrollPosition < offsetTop + offsetHeight - 100
                    ) {
                        setActiveSection(id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const targetPosition = element.offsetTop;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 700; // Adjust this value for slower or faster scrolling
            let start: number | null = null;

            const step = (timestamp: number) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const scrollPosition = startPosition + (distance * (progress / duration));
                window.scrollTo(0, scrollPosition);
                if (progress < duration) {
                    requestAnimationFrame(step);
                } else {
                    window.scrollTo(0, targetPosition);
                }
            };

            requestAnimationFrame(step);
        }
    };

    return (
        <div className="layout-container">
            <motion.aside initial={{ x: -300 }} animate={{ x: isNavOpen ? 0 : -300 }} className="sidebar">
                <div className="sidebar-content">
                    <div className="sidebar-header">
                        <h1 className="site-title">EduCenter</h1>
                        <ThemeSwitcher onThemeChange={handleThemeChange} />
                    </div>

                    <nav className={`navigation ${theme}`}>
                        {sections.map(({ id, title, icon: Icon }) => (
                            <Link
                                key={id}
                                href={`#${id}`}
                                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(id);
                                }}
                            >
                                <Icon size={20} />
                                {title}
                            </Link>
                        ))}
                    </nav>

                    <div className="sidebar-footer">
                        <div className="social-links">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} className="social-icon" aria-label={label}>
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.aside>

            <main className={`main-content ${theme}`}>
                <AnimatePresence mode="popLayout">
                    <section key="home" id="home" className="section">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <h1 className="section-title">Dobrodošli u EduCenter</h1>
                            <p className="section-description">Vaš put ka izvrsnosti počinje ovde.</p>
                        </motion.div>
                    </section>

                    <section key="services" id="services" className="section">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <h2 className="section-title">Naše Usluge</h2>
                            <div className="services-grid">
                                {services.map((service, index) => (
                                    <div key={index} className={`service-card ${theme}`}>
                                        <h3>{service.name}</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    <section key="blog" id="blog" className="section">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <h2 className="section-title">Blog</h2>
                            <div className={`blog-grid ${theme}`}>
                                {blogPosts.map((post, index) => (
                                    <div key={index} className={`blog-card ${theme}`}>
                                        <h3>{post.title}</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    <section key="about" id="about" className="section">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <h2 className="section-title">O Nama</h2>
                            <p>Mi smo tim posvećenih stručnjaka sa strašću za obrazovanje i razvoj.</p>
                        </motion.div>
                    </section>

                    <section key="contact" id="contact" className="section">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <h2 className="section-title">Kontakt</h2>
                            <form className={`contact-form ${theme}`}>
                                <input type="text" placeholder="Vaše ime" className={`form-input ${theme}`} />
                                <input type="email" placeholder="Email adresa" className={`form-input ${theme}`} />
                                <textarea placeholder="Vaša poruka" rows={4} className={`form-textarea ${theme}`}></textarea>
                                <button type="submit" className={`form-button ${theme}`}>Pošalji poruku</button>
                            </form>
                        </motion.div>
                    </section>
                </AnimatePresence>
            </main>
        </div>
    );
}