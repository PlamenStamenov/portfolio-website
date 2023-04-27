import React, { useRef, useEffect, useState, createRef } from 'react';
import Navigation from './components/Navigation/Navigation';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Education-Experience/Experience';
import Education from './components/Education-Experience/Education';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import {
    FaHome,
    FaUser,
    FaCode,
    FaBriefcase,
    FaGraduationCap,
    FaFolderOpen,
    FaEnvelope,
    FaBars
} from 'react-icons/fa';

import './App.scss'


function App() {
    const [activeItem, setActiveItem] = useState('intro');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'intro', title: 'Intro', component: Intro, icon: FaHome },
        { id: 'about', title: 'About', component: About, icon: FaUser },
        { id: 'skills', title: 'Skills', component: Skills, icon: FaCode },
        { id: 'experience', title: 'Experience', component: Experience, icon: FaBriefcase },
        { id: 'education', title: 'Education', component: Education, icon: FaGraduationCap },
        { id: 'portfolio', title: 'Portfolio', component: Portfolio, icon: FaFolderOpen },
        { id: 'contacts', title: 'Contacts', component: Contacts, icon: FaEnvelope },
    ];

    const sectionRefs = useRef(navItems.map(() => createRef()));

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleAnchorClick = (e, item) => {
        e.preventDefault();
        setActiveItem(item.id);
        const targetElement = document.getElementById(item.id);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - (item.id === "intro" ? 50 : 0); // Subtract 50 pixels from the target element's offsetTop
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            const context = this;
            const later = () => {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    useEffect(() => {
        const handleScroll = debounce(() => {
            const yOffset = window.pageYOffset;

            const currentItem = navItems.reduce((result, currentItem, index) => {
                const currentRef = sectionRefs.current[index];
                const rect = currentRef.current.getBoundingClientRect();
                const fromTop = rect.top + yOffset;

                if (fromTop + 50 <= yOffset && fromTop + rect.height > yOffset) {
                    return currentItem.id;
                } else {
                    return result;
                }
            }, activeItem);

            if (currentItem !== activeItem) {
                setActiveItem(currentItem);
            }
        }, 100);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeItem, navItems, sectionRefs]);

    return (
        <div className="wrapper">
            <div className="hamburger" onClick={handleMenuClick}>
                <FaBars />
            </div>
            <div className={`header${isMenuOpen ? " visible" : ""}`}>
                <Navigation activeItem={activeItem} handleAnchorClick={handleAnchorClick} navItems={navItems} />
            </div>
            <div className="main">
                {navItems.map((item, index) => {
                    const Component = item.component;
                    return (
                        <div key={item.id} ref={sectionRefs.current[index]} id={item.id}>
                            <Component />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
