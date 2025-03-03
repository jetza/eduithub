import React from 'react';
import './ContactForm.scss';
import {
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaViber,
    FaEnvelope,
    FaPhone,
    FaMapPin,
    FaLinkedin
} from 'react-icons/fa';

interface ContactFormProps {
    theme: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ theme }) => {
    return (
        <div className={`contact-form-container ${theme}`}>
            <div className={`contact-info ${theme}`}>
            <div className="contact">
                <h2 className="contact-info-title">Kontaktirajte nas</h2>
                <span><FaEnvelope /> lrnium.info@gmail.com</span>
                <span><FaPhone /> +387 65 271 124</span>
                <span><FaMapPin /> Banja Luka, Bosna i Hercegovina</span>
            </div>
        </div>
            <form className={`contact-form ${theme}`}>
                <input type="text" placeholder="Vaše ime" className={`form-input ${theme}`} />
                <input type="email" placeholder="Email adresa" className={`form-input ${theme}`} />
                <textarea placeholder="Vaša poruka" rows={4} className={`form-textarea ${theme}`}></textarea>
                <button type="submit" className={`form-button ${theme}`}>Pošalji poruku</button>
            </form>
            <div className={`social-icons ${theme} `}>
                <FaFacebook />
                <FaInstagram />
                <FaTiktok />
                <FaLinkedin />
                <FaViber />
            </div>
        </div>
    );
};

export default ContactForm;