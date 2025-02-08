import React from 'react';
import './ContactForm.scss';

interface ContactFormProps {
    theme: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ theme }) => {
    return (
        <form className={`contact-form ${theme}`}>
            <input type="text" placeholder="Vaše ime" className={`form-input ${theme}`} />
            <input type="email" placeholder="Email adresa" className={`form-input ${theme}`} />
            <textarea placeholder="Vaša poruka" rows={4} className={`form-textarea ${theme}`}></textarea>
            <button type="submit" className={`form-button ${theme}`}>Pošalji poruku</button>
        </form>
    );
};

export default ContactForm;