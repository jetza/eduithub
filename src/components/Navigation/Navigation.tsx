import {useEffect, JSX} from 'react';
import Link from 'next/link';
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
    );
};

export default Navigation;