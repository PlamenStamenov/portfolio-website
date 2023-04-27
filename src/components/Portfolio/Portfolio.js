import React, { useState } from 'react';
import './Portfolio.scss';

const Portfolio = () => {
    const [visibleItems, setVisibleItems] = useState(6);
    const [selectedFilter, setSelectedFilter] = useState('All');

    const galleryItems = [
        { id: 'HTML & CSS', src: "https://via.placeholder.com/300x200" },
        { id: 'HTML & CSS', src: "https://via.placeholder.com/300x200" },
        { id: 'HTML & CSS', src: "https://via.placeholder.com/300x200" },
        { id: 'ReactJS', src: "https://via.placeholder.com/300x200" },
        { id: 'ReactJS', src: "https://via.placeholder.com/300x200" },
        { id: 'ReactJS', src: "https://via.placeholder.com/300x200" },
        { id: 'HTML & CSS', src: "https://via.placeholder.com/300x200" },
        { id: 'HTML & CSS', src: "https://via.placeholder.com/300x200" },
        { id: 'ReactJS', src: "https://via.placeholder.com/300x200" },
        { id: 'HTML & CSS', src: "https://via.placeholder.com/300x200" },
        { id: 'HTML & CSS', src: "https://via.placeholder.com/300x200" },
        { id: 'ReactJS', src: "https://via.placeholder.com/300x200" }
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
                            <img src={item.src} alt="placeholder" />
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