import './NavigationTop.scss';
import { JSX, useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { sections } from "@/app/data";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import {FaBarsStaggered, FaXmark} from "react-icons/fa6";

interface NavigationTopProps {
    handleThemeChange: (theme: string) => void;
    theme: string;
}

const NavigationTop: (props: NavigationTopProps) => JSX.Element = ({ handleThemeChange, theme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false); // Close the menu after clicking
        } else {
            console.error(`Section with id "${id}" not found.`);
        }
    };

    return (
        <div className={`transparent-bar top ${isMenuOpen ? 'menu-open' : ''} ${theme === 'light' ? 'light' : ''}`}>
            <div className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaXmark/> : <FaBarsStaggered/>}
                {/*{isMenuOpen ? "✖" : "☰"}*/}
            </div>
            <ThemeSwitcher onThemeChange={handleThemeChange} />

            {isMenuOpen && (
                <nav className={`mobile-nav ${theme === 'light' ? 'light' : ''}`}>
                    <ul>
                        {sections.map(section => (
                            <li key={section.id} className={`${theme === 'light' ? 'light' : 'dark'}`} onClick={() => handleNavClick(section.id)}>
                                {section.title}
                            </li>
                        ))}
                    </ul>
                    <SocialLinks />
                </nav>
            )}
        </div>
    );
};

export default NavigationTop;