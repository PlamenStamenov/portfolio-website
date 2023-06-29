import React from 'react';
import './Navigation.scss';
import {
    FaLinkedin,
    FaPhoneSquareAlt,
    FaEnvelope,
    FaGithub
} from 'react-icons/fa';

const Navigation = ({ activeItem, handleAnchorClick, navItems }) => {
    const currentYear = new Date().getFullYear();

    const handleItemClick = (e, item) => {
        handleAnchorClick(e, item);
    };

    return (
        <nav className='navigation'>
            <img src="../../assets/avatar.jpg" alt="Plamen Stamenov" />
            <h2 className='navigation__title'>Plamen Stamenov</h2>
            <p className='navigation__subtitle'>WEB DEVELOPER</p>
            <ul className='navigation__list'>
                {navItems.map(item => {
                    const Icon = item.icon;
                    return (
                        <li key={item.id} className={activeItem === item.id ? 'active' : ''}>
                            <a href={`#${item.id}`} onClick={(e) => handleItemClick(e, item)} >
                                <Icon /> {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className="navigation__footer">
                <ul className="navigation__social">
                    <li>
                        <a href="https://www.linkedin.com/in/plamen-stamenov-256b71150/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="tel:+359883361570" target="_blank" rel="noopener noreferrer">
                            <FaPhoneSquareAlt />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:plamen.stamenov.89@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/PlamenStamenov"  target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        </li>
                </ul>
                <p className="copyright">© {currentYear} Plamen Stamenov</p>
            </div>
        </nav>
    );
};

export default Navigation;