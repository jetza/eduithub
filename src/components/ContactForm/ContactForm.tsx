import React from 'react';
import './ContactForm.scss';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaViber } from 'react-icons/fa';

interface ContactFormProps {
    theme: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ theme }) => {
    return (
        <div className={`contact-form-container ${theme}`}>
            <div className={`contact-info ${theme}`}>
                <h2 className="contact-info-title">Kontaktirajte nas</h2>
                <div className="phone-number">
                    <p>Br. Telefona: +123 456 789</p>
                </div>
                <div className="social-icons">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTiktok />
                    <FaYoutube />
                    <FaViber />
                </div>
            </div>
            <form className={`contact-form ${theme}`}>
                <input type="text" placeholder="Vaše ime" className={`form-input ${theme}`} />
                <input type="email" placeholder="Email adresa" className={`form-input ${theme}`} />
                <textarea placeholder="Vaša poruka" rows={4} className={`form-textarea ${theme}`}></textarea>
                <button type="submit" className={`form-button ${theme}`}>Pošalji poruku</button>
            </form>
        </div>
    );
};

export default ContactForm;