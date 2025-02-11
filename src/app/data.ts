import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaHome,
    FaBookOpen,
    FaNewspaper,
    FaUsers,
    FaEnvelope,
    FaTiktok
} from 'react-icons/fa';

export const sections = [
    { id: 'home', title: 'Početna', icon: FaHome },
    { id: 'services', title: 'Usluge', icon: FaBookOpen },
    { id: 'blog', title: 'Novosti', icon: FaNewspaper },
    { id: 'about', title: 'O nama', icon: FaUsers },
    { id: 'contact', title: 'Kontakt', icon: FaEnvelope },
];

export const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTiktok, href: '#', label: 'Tiktok' },
    { icon: FaYoutube, href: '#', label: 'Youtube' },
];

export const services = [
    { id: 1, name: "Instrukcije za učenje", text: "Instrukcije za osnovnu i srednju školu iz oblasti matematike i informatike." },
    { id: 2, name: "Mentorstvo", text: "Kontinualno učenje u oblasti matematike i informatike." },
    { id: 3, name: "Online obuke", text: "Kratke online obuke iz programiranja. C, C++, Paskal, Python, JavaScript..." },
    { id: 4, name: "Pripreme za školu", text: "Nudimo pripreme vezane za upis u školu i sve vrste ispita." },
    { id: 5, name: "Ostale usluge", text: "Pomoć pri izradi svih vrsta tekstualnih radova i prezentacija." },
];

export const blogPosts = [
    { id: 1, title: "Blog Naslov 1" },
    { id: 2, title: "Blog Naslov 2" },
    { id: 3, title: "Blog Naslov 3" },
];