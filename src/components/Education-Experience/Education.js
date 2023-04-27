import React from 'react';
import './Education-Experience.scss';

const Education = () => {
    return (
        <div className="education">
            <h3 className="title">Education</h3>
            <div className="timeline">
                <article className="timeline__item">
                    <div className="timeline__item__date">
                        <span>02.2023 - 04.2023</span>
                    </div>
                    <div className="timeline__item__body">
                        <h4 className="timeline__item__title">REACT JS</h4>
                        <h5 className="timeline__item__subtitle">SOFTUNI</h5>
                        <ul className="timeline__item__text">
                            <li>React and JSX</li>
                            <li>Components</li>
                            <li>Forms</li>
                            <li>Routing</li>
                            <li>React Hooks</li>
                            <li>Authentication </li>
                            <li>Advanced Techniques</li>
                        </ul>
                    </div>
                </article>
                <article className="timeline__item">
                    <div className="timeline__item__date">
                        <span>01.2023 - 02.2023</span>
                    </div>
                    <div className="timeline__item__body">
                        <h4 className="timeline__item__title">HTML & CSS</h4>
                        <h5 className="timeline__item__subtitle">SOFTUNI</h5>
                        <ul className="timeline__item__text">
                            <li>HTML Structure</li>
                            <li>CSS & Typography</li>
                            <li>CSS Box Model</li>
                            <li>Position & Grid</li>
                            <li>Flexbox</li>
                            <li>Media Queries</li>
                        </ul>
                    </div>
                </article>
                <article className="timeline__item">
                    <div className="timeline__item__date">
                        <span>04.2015 - 06.2015</span>
                    </div>
                    <div className="timeline__item__body">
                        <h4 className="timeline__item__title">JAVASCRIPT</h4>
                        <h5 className="timeline__item__subtitle">IT TALENTS ACADEMY</h5>
                        <ul className="timeline__item__text">
                            <li>Cycles, arrays, functions, IIFE, Closures, basic algorithms, and JavaScript data structures</li>
                            <li>HTML, CSS, and Web Programming Basics and OOP</li>
                        </ul>
                    </div>
                </article>
                <article className="timeline__item">
                    <div className="timeline__item__date">
                        <span>09.2011 - 01.2012</span>
                    </div>
                    <div className="timeline__item__body">
                        <h4 className="timeline__item__title">FUNDAMETALS OF C#</h4>
                        <h5 className="timeline__item__subtitle">TELERIK ACADEMY</h5>
                        <ul className="timeline__item__text">
                            <li>Introduction to programming</li>
                            <li>Primitive data types and variables</li>
                            <li>Operators and expressions</li>
                            <li>Input and output the console</li>
                            <li>Conditional constructions</li>
                            <li>Cycles</li>
                        </ul>
                    </div>
                </article>
                <article className="timeline__item">
                    <div className="timeline__item__date">
                        <span>09.2010 - 06.2014</span>
                    </div>
                    <div className="timeline__item__body">
                        <h4 className="timeline__item__title">COMPUTER TECHNOLOGIES IN ENGINEERING</h4>
                        <h5 className="timeline__item__subtitle">UNIVERSITY OF MINING AND GEOLOGY, SOFIA, BULGARIA</h5>
                        <ul className="timeline__item__text">
                            <li>Object oriented programming</li>
                            <li>Data Structures and Algorithms</li>
                            <li>Operating Systems</li>
                            <li>Database management systems</li>
                            <li>Web design</li>
                            <li>Application software development</li>
                            <li>Economy and Management</li>
                            <li>Computer Graphics</li>
                            <li>Microprocessor technology</li>
                            <li>Computer modeling</li>
                            <li>Administration of web systems</li>
                            <li>Information security and security</li>
                        </ul>
                    </div>
                </article>
                <span className="timeline__line"></span>
            </div>
        </div>
    );
}

export default Education;