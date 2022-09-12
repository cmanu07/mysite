import React, { useState } from "react";


const MainBG = () => {

    const [mainAbout, setMainAbout] = useState('main-bg-about');
    const mouseDownFunct = () => {
        setMainAbout('main-bg-about-click')
    }
    const mouseUpFunct = () => {
        setMainAbout('main-bg-about')
    }

    return <article className="main-article">
                <div className="main-bg">
                    <h1>My Portofolio Site</h1>
                    <h2>A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
                    <a href="/about" className={mainAbout} onMouseDown={mouseDownFunct} onMouseUp={mouseUpFunct}>ABOUT ME</a>
                </div>
            </article>
}

export default MainBG;