import React from "react"

import "./About.css"

import avatar1 from '../../Media/my_avatar_6.png'
import avatar2 from '../../Media/my_avatar_3.png'
import html_logo from '../../Media/about_html_logo.png'
import css_logo from '../../Media/about_css_logo.png'
import bootstrap_logo from '../../Media/about_bootstrap_logo.png'
import js_logo from '../../Media/about_js_logo.png'
import react_logo from '../../Media/about_react_logo.png'
import php_logo from '../../Media/about_php_logo.png'
import mysql_logo from '../../Media/about_mysql_logo.png'
import git_logo from '../../Media/about_git_logo.png'


export default function About () {

    return (
        <section className="about-main">
            <h2>ABOUT ME</h2>
            <div className="about-main-1">
                <img src={avatar1} alt="my avatar..."/>
                <div>
                    <p>
                        I'm Emanuel and I graduated from Babes&nbsp;-&nbsp;Bolyai&nbsp;University in 2008 with a degree in Finances.
                        After 13+ years of experience in the field I'm looking for a transition to IT as it has always been one of my 
                        passions.
                    </p>
                    <p>
                        In 2022 I have completed a certified course with Fasttrack IT Cluj-Napoca in Web Development and I'm eager to put my knowledge into practice.
                    </p>
                </div>
            </div>
            <div className="about-main-2">
                <div>
                    <p>I am now looking for a Web Developer position to work among professionals.<br/> 
                    I am trustworthy, ambitious, team player, open to accepting feedback and new ideas.</p>
                    <p>Also self-motivated, with a good management of time, confident and hardworking and
                    I'm able to stay calm under pressure and I am an active listener.</p>
                </div>
                <img src={avatar2} alt="my avatar..."/>
            </div>
            <div className="about-main-3">
                <div>
                    <p>
                        I'm skilled in HTML, CSS, JavaScript, SQL, also BootStrap and React JS libraries and also some junior level knowledge in PHP.
                    </p>
                </div>
                <div>
                    <img src={html_logo} alt="my avatar..."/>
                    <img src={css_logo} alt="my avatar..."/>
                    <img src={bootstrap_logo} alt="my avatar..."/>
                    <img src={js_logo} alt="my avatar..."/>
                    <img src={react_logo} alt="my avatar..."/>
                    <img src={php_logo} alt="my avatar..."/>
                    <img src={mysql_logo} alt="my avatar..."/>
                    <img src={git_logo} alt="my avatar..."/>
                </div>
            </div>
        </section>
        )
}