import * as React from 'react';
import './Footer.scss';
import ContactModal from '../ContactModal/ContactModal';
import {FaRegCommentAlt} from 'react-icons/fa';
import { FaRegCopyright } from "react-icons/fa6";

interface FooterProps {
    theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <footer className={`footer-bar ${theme}`}>
            <span>
                <FaRegCopyright />2025 Lrnium. Sva prava rezervisana.</span>
            <button className="contact-icon" onClick={toggleModal}>
                <FaRegCommentAlt size={40} />
            </button>
            {isModalOpen && <ContactModal onClose={toggleModal}  theme={theme}/>}
        </footer>
    );
};

export default Footer;