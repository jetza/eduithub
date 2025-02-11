import * as React from 'react';
import './ContactModal.scss';
import Image from 'next/image';

interface ContactModalProps {
    onClose: () => void;
    theme: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose, theme }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    {theme === 'dark' ? (
                        <Image src="/logo-dark.png" alt="Learnium Logo" className="logo" width={80} height={80} />
                    ) : (
                        <Image src="/logo-light.png" alt="Learnium Logo" className="logo" width={80} height={80} />
                    )}
                    <h2>Lrnium</h2>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <p className="modal-footer-text">We will get back to you as soon as possible.</p>
            </div>
        </div>
    );
};

export default ContactModal;