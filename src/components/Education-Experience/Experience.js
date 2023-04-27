import React from 'react';
import './Education-Experience.scss';

const Experience = () => {
    return (
        <section className="experience">
            <h3 className="title">Experience</h3>
            <div className="timeline">
                <article className="timeline__item">
                    <div className="timeline__item__date">
                        <span>11.2018 – 03.2023</span>
                    </div>
                    <div className="timeline__item__body">
                        <h4 className="timeline__item__title">LEAD WEB CONTENT MANAGER</h4>
                        <h5 className="timeline__item__subtitle">DRAFTKINGS INC</h5>
                        <ul className="timeline__item__text">
                            <li>Resolve a wide range of Front-End issues & incidents</li>
                            <li>Initiate improvements and their execution to support the overall web content management strategy of the team</li>
                            <li>Edit and coordinate the content for clients’ sites</li>
                            <li>Perform trainings on CMS to company clients</li>
                            <li>Assist in the onboarding process of new team members</li>
                            <li>Develop and apply different Front-End customizations using HTML, CSS, JS</li>
                        </ul>
                    </div>
                </article>
                <article className="timeline__item">
                    <div className="timeline__item__date">
                        <span>11.2017 – 10.2018</span>
                    </div>
                    <div className="timeline__item__body">
                        <h4 className="timeline__item__title">WEB DEVELOPER</h4>
                        <h5 className="timeline__item__subtitle">SOS LOCKSMITH LTD</h5>
                        <ul className="timeline__item__text">
                            <li>Develop and create web sites based on a pre-set technical assignment</li>
                            <li>Administer, maintain and update websites, SEO</li>
                        </ul>
                    </div>
                </article>
                <article className="timeline__item">
                    <div className="timeline__item__date">
                        <span>08.2016 - 10.2018</span>
                    </div>
                    <div className="timeline__item__body">
                        <h4 className="timeline__item__title">WEB ADMINISTRATOR</h4>
                        <h5 className="timeline__item__subtitle">MODO LTD</h5>
                        <ul className="timeline__item__text">
                            <li>Creation and development of graphic concepts for web site designs</li>
                            <li>Design of logos and icons</li>
                            <li>Create websites based on assignment</li>
                            <li>Graphic design of websites</li>
                        </ul>
                    </div>
                </article>
                <article className="timeline__item">
                    <div className="timeline__item__date">
                        <span>01.2014 - 07.2016</span>
                    </div>
                    <div className="timeline__item__body">
                        <h4 className="timeline__item__title">WEB DEVELOPER</h4>
                        <h5 className="timeline__item__subtitle">FREELANCER</h5>
                        <ul className="timeline__item__text">
                            <li>Develop various websites for different clients</li>
                            <li>Administer and update websites</li>
                        </ul>
                    </div>
                </article>
                <span className="timeline__line"></span>
            </div>
        </section>
    );
}

export default Experience;