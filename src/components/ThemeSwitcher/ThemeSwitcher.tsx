import { useEffect, useState } from 'react';
import './ThemeSwitcher.scss';
import Switch from "@/components/Switch/Switch";

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
        <Switch isOn={theme === 'light'} handleToggle={toggleTheme} />
    );
};

export default ThemeSwitcher;