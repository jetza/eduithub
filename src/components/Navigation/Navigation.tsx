import React, { useEffect, JSX } from 'react';
import { sections } from '@/app/data';
import './Navigation.scss';

interface NavigationProps {
    theme: string;
    activeSection: string;
    setActiveSection: (id: string) => void;
}

const Navigation: (props: NavigationProps) => JSX.Element = ({ theme, activeSection, setActiveSection }) => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const targetPosition = element.offsetTop;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 700;
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
    }, [setActiveSection]);

    return (
        <div className={`navigation-container ${theme}`}>
            <ul className="navigation">
                {sections.map(({ id, title, icon: Icon }) => (
                    <li
                        key={id}
                        className={`nav-link ${activeSection === id ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(id);
                        }}
                        style={{
                            '--i': theme === 'dark' ? 'var(--highlight-color)' : 'var(--neon-blue-rgb)',
                            '--j': theme === 'dark' ? 'var(--neon-blue-rgb)' : 'var(--highlight-color)'
                        } as React.CSSProperties}
                    >
                        <span className="icon"><Icon size={20} /></span>
                        <span className="title">{title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;