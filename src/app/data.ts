import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHome, FaBookOpen, FaNewspaper, FaUsers, FaEnvelope } from 'react-icons/fa';

export const sections = [
    { id: 'home', title: 'Početna', icon: FaHome },
    { id: 'services', title: 'Usluge', icon: FaBookOpen },
    { id: 'blog', title: 'Blog', icon: FaNewspaper },
    { id: 'about', title: 'O nama', icon: FaUsers },
    { id: 'contact', title: 'Kontakt', icon: FaEnvelope },
];

export const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'Youtube' },
];

export const services = [
    { id: 1, name: "Online kursevi" },
    { id: 2, name: "Mentorstvo" },
    { id: 3, name: "Radionice" },
    { id: 4, name: "Sertifikacija" },
];

export const blogPosts = [
    { id: 1, title: "Blog Naslov 1" },
    { id: 2, title: "Blog Naslov 2" },
    { id: 3, title: "Blog Naslov 3" },
];