'use client';

import {useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./page.scss";
import { services, blogPosts } from './data';
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import Navigation from "@/components/Navigation/Navigation";
import Image from "next/image";
import Card from "@/components/Card/Card";
import NavigationTop from "@/components/NavigationTop/NavigationTop";
import SocialLinks from "@/components/SocialLinks/SocialLinks";


export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [isNavOpen] = useState(true);
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.history.scrollRestoration = "manual";
            window.scrollTo(0, 0);
        }
    }, []);


    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    }, []);

    if (theme === null) {
        return null;
    }

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
    };

    return (
        <div className={`layout-container `} data-theme={theme}>
            <NavigationTop handleThemeChange={handleThemeChange} theme={theme} />
            <motion.aside initial={{ x: -300 }} animate={{ x: isNavOpen ? 0 : -300 }} className="sidebar">
                <div className="sidebar-content">
                    <div className="sidebar-header">
                        <div className="logo-container">
                            <div className="logo">
                                {theme === 'dark' ? (
                                    <Image src="/logo-dark.png" alt="Logo" width={80} height={80} />
                                ) : (
                                    <Image src="/logo-light.png" alt="Logo" width={80} height={80} />
                                )}
                            </div>
                        </div>
                    </div>
                    <Navigation theme={theme} activeSection={activeSection} setActiveSection={setActiveSection} />

                    <div className="sidebar-footer">
                        <SocialLinks />
                    </div>
                </div>
            </motion.aside>

            <main className={`main-content grid ${theme}`}>
                <AnimatePresence mode="popLayout">
                    <section key="home" id="home" className="section">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <h1 className="section-title">Learnium</h1>
                            <p className="section-description">Naša misija je da svim učenicima, bilo da su deca koja tek ulaze u svet programiranja ili odrasli početnici, omogućimo da nađu lako razumljive i zabavne načine za učenje. Pružamo sve potrebne alate i resurse kako biste savladali osnovne i napredne veštine iz matematike i web developmenta. Kroz interaktivne časove, kreativne projekte i individualizovane pristupe, učenici će moći da savladaju gradivo na način koji je prilagođen njihovom uzrastu i tempu.</p>
                            <p className="section-description">Naša ponuda uključuje online i uživo nastavu, pružajući vam fleksibilnost da birate način učenja koji vam najviše odgovara. Časovi su dizajnirani tako da podstiču radoznalost, motivaciju i ljubav prema učenju, a istovremeno omogućavaju razvoj praktičnih veština koje mogu biti korisne za buduće školovanje ili profesionalni razvoj.</p>
                            <p className="section-description">Učenici će kroz praktične zadatke i projekte učiti o osnovama web developmenta, stvarajući svoje prve web stranice koristeći HTML, CSS i JavaScript, kao i primenjivati tehnike za kreiranje funkcionalnih i modernih sajtova. Za decu, posebnu pažnju posvećujemo tome da nastava bude zabavna i angažujuća, kroz projekte i aktivnosti koje ih motivišu da uče kroz igru.</p>
                            <p className="section-description">Pored web developmenta, nudimo i instrukcije iz matematike, sa posebnim naglaskom na razumevanje osnovnih matematičkih koncepata i veština. Naš cilj je da učenici steknu čvrste temelje i razviju matematičko razmišljanje, što će im pomoći da se snalaze ne samo u školi, već i u svakodnevnom životu i profesionalnom životu.</p>
                            <p className="section-description">Bilo da želite da vaša deca postanu web developeri ili samo da poboljšaju svoje matematičke veštine, naši časovi su dizajnirani da pruže praktično, kvalitetno i efikasno obrazovanje. Pridružite nam se i započnite svoje obrazovno putovanje sa nama, gde je svaki korak prema učenju i napredovanju važan!</p>
                        </motion.div>
                    </section>

                    <section key="services" id="services" className="section">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <h2 className="section-title">Usluge</h2>
                            <br/>
                            <p className="section-description">🌟 Učenje kroz igru i praksu! Naš cilj je da deci i početnicima učinimo web development zanimljivim i pristupačnim.</p>
                            <p className="section-description">📌 Instrukcije za decu</p>
                            <p className="section-description">👩‍🏫 Individualni i grupni časovi prilagođeni uzrastu</p>
                            <p className="section-description">🎨 Učenje kroz zabavne projekte – crtanje, animacije i igre</p>
                            <p className="section-description">💻 Prvi koraci u programiranju kroz HTML, CSS i JavaScript</p>
                            <p className="section-description">📌 Online edukacija za web development</p>
                            <p className="section-description">🚀 Kursevi za početnike i one koji žele da unaprede znanje</p>
                            <p className="section-description">📚 Detaljni tutorijali i interaktivne radionice</p>
                            <p className="section-description">🔧 Praktične vežbe i realni projekti</p>
                            <p className="section-description">💡 Bilo da vaše dete pravi svoj prvi sajt ili želite da započnete karijeru u web developmentu, mi smo tu da pomognemo!</p>
                            <br/>
                            <div className="services-grid">
                                {services.map((service, index) => (
                                    <Card theme={theme} name={service.name} key={index} />
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    <section key="news" id="news" className="section">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <h2 className="section-title">Novosti</h2>
                            <p className="section-description">Ovde možete pronaci najnovije informacije.</p>
                            <div className={`blog-grid ${theme}`}>
                                {blogPosts.map((post, index) => (
                                    <div key={index} className={`blog-card ${theme}`}>
                                        <h3>{post.title}</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                ))}
                            </div>
                            <br/>
                            <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </motion.div>
                    </section>

                    <section key="about" id="about" className="section">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <h2 className="section-title">O Nama</h2>
                        </motion.div>
                        <p className="section-description">Mi smo tim posvećenih edukatora i profesionalaca sa jedinstvenim ciljem – da decu, početnike i sve zainteresovane za učenje usmerimo ka uspehu u <strong>matematici</strong> i <strong>web developmentu</strong>. Naša strast prema obrazovanju, zajedno sa ljubavlju prema tehnologiji, omogućava nam da kreiramo sadržaj koji je zabavan, edukativan i lako primenljiv.</p>

                        <p className="section-description">Sa dugogodišnjim iskustvom u obrazovanju i web razvoju, naši instruktori kombinuju stručnost i strast prema svom poslu kako bi pružili kvalitetnu nastavu koja je prilagođena svakom učeniku. Razumemo da učenje može biti izazovno, ali verujemo da sa pravim pristupom, svaki učenik može savladati materiju na način koji mu odgovara. Naš cilj je da učenicima pružimo znanje koje im nije samo korisno danas, već i za njihovu budućnost.</p>

                        <p className="section-description">Nudimo <strong>online</strong> i <strong>uživo</strong> časove, pružajući učenicima potpunu fleksibilnost. Bilo da je u pitanju osnove matematike, programiranje za decu ili razvoj naprednih web sajtova, svaki čas je dizajniran da bude interaktivan, motivišući i usmeren na konkretne rezultate. Takođe, radimo sa učenicima svih uzrasta i nivoa, od onih koji tek počinju, do onih koji žele da unaprede svoje veštine i prošire znanje.</p>

                        <p className="section-description">Naša misija je jednostavna – da učenici steknu ne samo teorijsko, već i praktično znanje, koje mogu odmah primeniti u svakodnevnim životnim situacijama i na radnim mestima. S ponosom pratimo napredak svakog učenika i pružamo im podršku na svakom koraku ka njihovom obrazovnom i profesionalnom uspehu.</p>
                    </section>

                    <section key="contact" id="contact" className="section">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <ContactForm theme={theme} />
                        </motion.div>
                    </section>

                </AnimatePresence>
            </main>
            {<Footer theme={theme}/>}
        </div>
    );
}