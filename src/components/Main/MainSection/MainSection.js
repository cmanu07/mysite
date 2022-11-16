import React, { useState } from "react";

import "./MainSection.css";


const MainSection = () => {

    const [mainAbout, setMainAbout] = useState(() => 'main-bg-about');
    const [mainAbout2, setMainAbout2] = useState(() => 'main-bg-about2');

    const mouseDownFunct = () => {
        setMainAbout('main-bg-about-click')
    }
    const mouseUpFunct = () => {
        setMainAbout('main-bg-about')
    }
    const mouseDownFunct2 = () => {
        setMainAbout2('main-bg-about2-click')
    }
    const mouseUpFunct2 = () => {
        setMainAbout2('main-bg-about2')
    }

    return <article className="main-article">               
                <div className="main-bg-2">
                    <h5>IT has always been one of my passions, so in 2022 I have completed a certified course with Fasttrack IT
                        Cluj&nbsp;-&nbsp;Napoca in Web Development and I'm eager to put my knowledge into practice.
                    </h5>
                    <a href="/about" className={mainAbout} 
                            onMouseDown={mouseDownFunct} 
                            onMouseUp={mouseUpFunct}
                        >more ABOUT ME
                    </a>
                </div>
                <div className="main-bg-3">
                    <h5>I am now looking for a Junior Web Developer position to finally kick&nbsp;-&nbsp;start my career, so I started building my own projects.</h5>
                    <a href="/projects" className={mainAbout2} 
                            onMouseDown={mouseDownFunct2} 
                            onMouseUp={mouseUpFunct2}
                        >see my PROJECTS
                    </a>
                </div>
            </article>
}

export default MainSection;