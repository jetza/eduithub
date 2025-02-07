import { useEffect, useState } from 'react';
import './ThemeSwitcher.css';

interface ThemeSwitcherProps {
    onThemeChange: (newTheme: string) => void;
}

const ThemeSwitcher = ({ onThemeChange }: ThemeSwitcherProps) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
        onThemeChange(savedTheme);
    }, [onThemeChange]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        onThemeChange(newTheme);
    };

    return (
        <button className="theme-button" onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    );
};

export default ThemeSwitcher;