import React, { useState } from 'react';
import './Portfolio.scss';

const Portfolio = () => {
    const [visibleItems, setVisibleItems] = useState(6);
    const [selectedFilter, setSelectedFilter] = useState('All');

    const galleryItems = [
        { id: 'ReactJS', src: `${process.env.PUBLIC_URL}/assets/pass_generator_react.jpg`, alt: 'Password Generator React', link: 'https://password-generator-6f2ac.web.app/' },
        { id: 'HTML & CSS', src: `${process.env.PUBLIC_URL}/assets/card-spread-effect.jpg`, alt: 'Card Spread Effect', link: 'https://card-spread-effect.web.app/' },
        { id: 'HTML & CSS', src: `${process.env.PUBLIC_URL}/assets/hacker-effect-text.jpg`, alt: 'Hacker Text Effect', link: 'https://hacker-effect.web.app/' },
        { id: 'HTML & CSS', src: `${process.env.PUBLIC_URL}/assets/hover-effect.jpg`, alt: 'Hover Effect', link: 'https://hover-effect-2c40c.web.app/' }
    ];

    const navItems = ['All', 'HTML & CSS', 'ReactJS'];

    const handleLoadMore = () => {
        setVisibleItems(visibleItems + 3);
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        setVisibleItems(6);
    };

    const filteredItems = selectedFilter === 'All' ? galleryItems : galleryItems.filter(item => item.id === selectedFilter);

    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Portfolio</h3>
            <div className="portfolio__container">
                <ul className="portfolio__nav">
                    {navItems.map((navItem, index) => (
                        <li
                            className={`portfolio__nav-item${selectedFilter === navItem ? ' current' : ''}`}
                            key={index}
                            onClick={() => handleFilterChange(navItem)}
                        >
                            {navItem}
                        </li>
                    ))}
                </ul>
                <div className="portfolio__gallery">
                    {filteredItems.slice(0, visibleItems).map((item, index) => (
                        <div className="portfolio__gallery-item" key={index}>
                            <a href={item.link} target='_blank'><img src={item.src} alt={item.alt} /></a>
                        </div>
                    ))}
                </div>
                {visibleItems < filteredItems.length && (
                    <button className="portfolio__btn" onClick={handleLoadMore}>
                        Load More
                    </button>
                )}
            </div>
        </section >
    )
}

export default Portfolio;