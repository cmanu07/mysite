import React, { useContext, useEffect, useRef, useState } from "react";

import "./Header.css";

import NavBar from "./NavBar"
import { ThemeContext } from "../Contexts/ThemeContext";
import myLogo from "../Media/my_logo.png"
import ShowDate from "../Main/ShowDate/ShowDate";

const Header = () => {

    const {themeMode, setThemeMode} = useContext(ThemeContext);

    const toggleTheme = () => {
        setThemeMode(!themeMode);
        localStorage.setItem('theme', !themeMode)
      }

    const [navbar, setNavbar] = useState(() => true)
    const [toggleMenu, setToggleMenu] = useState(() => true)
    const [toggleMenuP, setToggleMenuP] = useState(() => true)
    const [scroller, setScroller] = useState(() => false)

    const toggleMenuFunct = () => {
        setToggleMenu(!toggleMenu);
        setToggleMenuP(!toggleMenuP);
        setNavbar(!navbar);
    }
    const toggleMenuButton = useRef();

    
    useEffect(() => {
        // const closeMenu = (e) => {
        //     console.log(e.path[0])
        //     if(e.path[0] !== toggleMenuButton.current)
        //     setToggleMenu(toggleMenu);
        // }
        // document.body.addEventListener('click', closeMenu)
        
        const onScroll = () => {
            if (window.scrollY >= 15) {
                setScroller(true)
            } else setScroller(false)
        }
        window.addEventListener('scroll', onScroll)

        return (
            // () => document.body.removeEventListener('click', closeMenu),
            () => window.removeEventListener('scroll', onScroll)
        )
    })

    const navList = [{buton1: 'PROJECTS', buton2: 'CV', buton3: 'ABOUT ME'}];


    return (
        <div className = {scroller ? 'header-on' : 'header'}>
            <h1 title="Emanuel Caradan - My Portfolio Site"><a href="/"><img src={myLogo} alt="my site logo"/>MANU</a></h1>
            <nav className={navbar ? "navbar-off" : "navbar"}>
                {navList.map((buton) => {
                    return <NavBar
                    key = {buton.buton1}
                    proiecte = {buton.buton1}
                    cv = {buton.buton2}
                    despre = {buton.buton3}
                    />
                })}
            </nav>
            <ShowDate/>
            <label className="toggle-theme">
                <input type='checkbox' onChange={toggleTheme} checked={themeMode === 'false'} />
                <span className="toggle-moon-icon"></span>
                <span className="toggle-sun-icon"></span>
                <span className="slider"></span>
            </label>
            
            <div className={toggleMenu ? "toggle" : "toggle-active"} onClick={toggleMenuFunct} ref={toggleMenuButton}>
                <p className={toggleMenuP ? "toggle-p" : "toggle-p-off"}></p>
            </div>
        </div>
    )
};

export default Header;