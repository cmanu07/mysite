import React from 'react';

import "./HomePage.css";

import MainSection from '../../Main/MainSection/MainSection';
import video_BG from '../../Media/videos/Forest_BG.mp4';
import myCvPhoto from '../../Media/my_photo.jpeg';


export default function Home () {
    
    return (<>
            <div className='main-article'>
                <div className="main-article-overlay"></div>
                <video src={video_BG} autoPlay muted loop></video>
                <div className="main-bg">
                    <h1>Hello,</h1>
                    <figure>
                        <img src={myCvPhoto} alt="my portrait..."/>
                        <figcaption>
                            <h2 className="main-bg-h2">My name is Emanuel&nbsp;Caradan and&nbsp;I am a Junior&nbsp;Web&nbsp;Developer</h2>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <MainSection/>
    </>)
}