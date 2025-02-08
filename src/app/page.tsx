'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./page.scss";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Navigation from "@/components/Navigation/Navigation";
import { socialLinks, services, blogPosts } from './data';
import Footer from "@/components/Footer/Footer";

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [isNavOpen] = useState(true);
    const [theme, setTheme] = useState('dark');

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
    };

    return (
        <div className="layout-container">
            <div className="transparent-bar top">
                <ThemeSwitcher onThemeChange={handleThemeChange} />
            </div>
            <motion.aside initial={{ x: -300 }} animate={{ x: isNavOpen ? 0 : -300 }} className="sidebar">
                <div className="sidebar-content">
                    <div className="sidebar-header">
                        <h1 className="site-title">EduCenter</h1>
                    </div>

                    <Navigation theme={theme} activeSection={activeSection} setActiveSection={setActiveSection} />

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
                <div className="transparent-bar bottom">
                    <Footer/>
                </div>
            </main>
        </div>
    );
}