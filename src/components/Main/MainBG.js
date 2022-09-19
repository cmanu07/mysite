import React, { useState } from "react";
import video_BG from '../Media/videos/Forest_BG.mp4';


const MainBG = () => {

    const [mainAbout, setMainAbout] = useState(() => 'main-bg-about');
    const mouseDownFunct = () => {
        setMainAbout('main-bg-about-click')
    }
    const mouseUpFunct = () => {
        setMainAbout('main-bg-about')
    }

    return <article className="main-article">
                <div className="main-article-overlay"></div>
                <video src={video_BG} autoPlay muted loop></video>
                <div className="main-bg">
                    <h1>Hello,</h1>
                    <h2 className="main-bg-h2">My name is Emanuel Caradan and I am a Junior Web Developer</h2>
                    <a href="/about" className={mainAbout} onMouseDown={mouseDownFunct} onMouseUp={mouseUpFunct}>ABOUT ME</a>
                </div>
            </article>
}

export default MainBG;