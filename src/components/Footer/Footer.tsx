import * as React from 'react';
import './Footer.scss';
import ContactModal from '../ContactModal/ContactModal';
import {FaCopyright, FaRegCommentAlt} from 'react-icons/fa';

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
                <FaCopyright /> 2025 Lrnium. Sva prava rezervisana.</span>
            <button className="contact-icon" onClick={toggleModal}>
                <FaRegCommentAlt size={40} />
            </button>
            {isModalOpen && <ContactModal onClose={toggleModal}  theme={theme}/>}
        </footer>
    );
};

export default Footer;