import { socialLinks } from "@/app/data";
import './SocialLinks.scss';
import React from "react";

const SocialLinks = () => {
    return (
        <ul className="social-links">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <li key={index}>
                    <a href={href} className="social-icon" aria-label={label}>
                        <Icon size={20} className="icon" />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialLinks;