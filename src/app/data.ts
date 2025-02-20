import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaHome,
    FaBookOpen,
    FaNewspaper,
    FaUsers,
    FaEnvelope,
    FaTiktok, FaViber
} from 'react-icons/fa';

export const sections = [
    { id: 'home', title: 'Početna', icon: FaHome },
    { id: 'services', title: 'Usluge', icon: FaBookOpen },
    { id: 'news', title: 'Novosti', icon: FaNewspaper },
    { id: 'about', title: 'O nama', icon: FaUsers },
    { id: 'contact', title: 'Kontakt', icon: FaEnvelope },
];

export const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTiktok, href: '#', label: 'Tiktok' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/lrnium', label: 'LinkedIn' },
    { icon: FaViber, href: '#', label: 'Viber' },
];

export const services = [
    { id: 1, name: "Online obuke", text: "Kratke online obuke iz programiranja. C, C++, Paskal, Python, JavaScript..." },
    { id: 2, name: "Mentorstvo", text: "Kontinualno učenje u oblasti matematike i informatike." },
    { id: 3, name: "Instrukcije za učenike", text: "Instrukcije za osnovnu i srednju školu iz oblasti matematike i informatike. Online obuke uz mogucnost dolaska na kucnu adresu. Prvi cas konsultacije je besplatan." },
    { id: 4, name: "Pripreme za školu", text: "Nudimo pripreme vezane za upis u školu i sve vrste ispita." },
    { id: 5, name: "Ostale usluge", text: "Pomoć pri izradi svih vrsta tekstualnih radova i prezentacija. Izrada web prezentacija." },
];

export const blogPosts = [
    { id: 1, title: "Naslov 1" },
    { id: 2, title: "Naslov 2" },
    { id: 3, title: "Naslov 3" },
];