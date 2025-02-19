import * as React from 'react';
import './ContactModal.scss';
import Image from 'next/image';

interface ContactModalProps {
    onClose: () => void;
    theme: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose, theme }) => {
    const modalRef = React.useRef<HTMLDivElement>(null!);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    {theme === 'dark' ? (
                        <Image src="/logo-light.png" alt="Learnium Logo" className="logo" width={80} height={80} />
                    ) : (
                        <Image src="/logo-dark.png" alt="Learnium Logo" className="logo" width={80} height={80} />
                    )}
                    <h2>Lrnium</h2>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Ime i prezime" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Poruka" required></textarea>
                    <button type="submit">Pošalji poruku</button>
                </form>
                <p className="modal-footer-text">Kontaktiraćemo vas u što kraćem roku.</p>
            </div>
        </div>
    );
};

export default ContactModal;