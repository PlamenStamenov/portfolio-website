import React, { useRef } from 'react';
import './About.scss';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const About = () => {
    const downloadLinkRef = useRef(null);

    const downloadFile = () => {
        downloadLinkRef.current.click();
    }

    return (
        <section className='about'>
            <h3 className='about__title'>About Me</h3>
            <div className='about__info'>
                <div className="about__info__left">
                    <img className='about__info__image' src="../../assets/avatar.jpg" alt="Plamen Stamenov" />
                </div>
                <div className="about__info__right">
                    <h2 className='about__info__title'>Hello,</h2>
                    <p className='about__info__description'>
                        I am a results-oriented Front-End Developer, I have a strong experience of almost 5 years in the online betting/gambling industry.
                        During my tenure at DraftKings Inc., I honed my skills in HTML, CSS, SASS, and JavaScript while working on various projects.
                        With certifications in HTML, CSS, JavaScript, and React JS, I have developed a deep understanding of these technologies.
                        I am fluent in English and pride myself on my loyalty to my team and company.
                    </p>
                    <div className="about__info__container">
                        <div className="about__info__column">
                            <p>Name: <span>Plamen Stamenov</span></p>
                            <p>Birthday: <span>18 June, 1989</span></p>
                        </div>
                        <div className="about__info__column">
                            <p>Address: <span>Sofia, Bulgaria</span></p>
                            <p>Email: <span>plamen.stamenov.89@gmail.com</span></p>
                        </div>
                    </div>
                    <div className="about__info__buttons">
                        <button className="about__info__button" onClick={downloadFile}>
                            <FaCloudDownloadAlt />Download CV
                            </button>
                            <a
                                href={process.env.PUBLIC_URL + '/assets/Plamen_Stamenov_CV.docx'}
                                download="Plamen_Stamenov_CV.docx"
                                target='_blank'
                                rel="noreferrer noopener"
                                style={{ display: 'none' }}
                                ref={downloadLinkRef}
                            ></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;