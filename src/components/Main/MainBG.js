import React, { useState } from "react";
import video_BG from '../Media/videos/Forest_BG.mp4';
import myCvPhoto from '../Media/my_photo.jpeg';

const MainBG = () => {

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
                <div className="main-article-overlay"></div>
                <video src={video_BG} autoPlay muted loop></video>
                <div className="main-bg">
                    <h1>Hello,</h1>
                    <figure>
                        <img src={myCvPhoto} alt="my portrait..."/>
                        <figcaption>
                            <h2 className="main-bg-h2">My name is Emanuel Caradan and I am a Junior Web Developer</h2>
                        </figcaption>
                    </figure>
                </div>
                <div className="main-bg-2">
                    <h5>IT has always been one of my passions, so in 2022 I have completed a certified course with Fasttrack IT Cluj-Napoca in Web Development and I'm eager to put my knowledge into practice.</h5>
                    <a href="/about" className={mainAbout} onMouseDown={mouseDownFunct} onMouseUp={mouseUpFunct}>more ABOUT ME</a>
                </div>
                <div className="main-bg-3">
                    <h5>I am now looking for a Junior Web Developer position to finally kick-start my career</h5>
                    <a href="/projects" className={mainAbout2} onMouseDown={mouseDownFunct2} onMouseUp={mouseUpFunct2}>see my PROJECTS</a>
                </div>
            </article>
}

export default MainBG;