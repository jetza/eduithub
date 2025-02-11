import * as React from 'react';
import './Footer.scss';

interface FooterProps {
    theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
    return (
        <footer className={`footer-bar ${theme}`}>
            <p>&copy; 2025 Learnium. All rights reserved.</p>
        </footer>
    );
};

export default Footer;