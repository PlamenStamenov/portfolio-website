import React from 'react';

import './Intro.scss';

const Intro = () => {

    return (
        <section className="intro" style={{ backgroundImage: `url(/assets/hero-image.jpg)` }} >
            <div className="intro__container">
                <h1 className="intro__title">I’m Plamen Stamenov<span className='intro__dot'>.</span></h1>
                <p className="intro__description">
                “A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”
                <br />
                – Antoine de Saint-Exupéry
                </p>
            </div>
            <div className="intro__overlay"></div>
        </section>
    );
};

export default Intro;