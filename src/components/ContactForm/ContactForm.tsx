import React from 'react';
import './ContactForm.scss';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaViber } from 'react-icons/fa';

interface ContactFormProps {
    theme: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ theme }) => {
    return (
        <div className={`contact-form-container ${theme}`}>
            <form className={`contact-form ${theme}`}>
                <h2 className="contact-info-title">Kontaktirajte nas</h2>
                <input type="text" placeholder="Vaše ime" className={`form-input ${theme}`} />
                <input type="email" placeholder="Email adresa" className={`form-input ${theme}`} />
                <textarea placeholder="Vaša poruka" rows={4} className={`form-textarea ${theme}`}></textarea>
                <button type="submit" className={`form-button ${theme}`}>Pošalji poruku</button>
            </form>
            <div className={`contact-info ${theme}`}>
                <div className="contact">
                    <p>📩 Imate pitanje ili sugestiju? Pošaljite nam poruku!</p>
                        <p>Email: lrnium.info@gmail.com</p>
                        <p>Br. Telefona: +123 456 789</p>
                        <p>📬 Prijavite se na naš newsletter i budite u toku sa najnovijim člancima i edukativnim resursima!</p>
                </div>
                <div className={`social-icons ${theme}`}>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTiktok />
                    <FaYoutube />
                    <FaViber />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;