import React, { useContext } from "react";

import NavBar from "./NavBar"
import { ThemeContext } from "../Contexts/ThemeContext";
import myLogo from "../Media/my_logo.png"

const Header = () => {

    const {toggleTheme, theme} = useContext(ThemeContext);

    let className = "header";
    const navList = [{buton1: 'PROJECTS', buton2: 'CV', buton3: 'ABOUT ME'}];

    return (
        <div className = {`${className}`}>
            <h1 title="Emanuel Caradan - My Site"><a href="/"><img src={myLogo} alt="my site logo"/>MANU</a></h1>
            {navList.map((buton) => {
                return <NavBar
                    key = {buton.buton1}
                    proiecte = {buton.buton1}
                    cv = {buton.buton2}
                    despre = {buton.buton3}
                />
            })}
            <label className="toggle-theme">
                <input type='checkbox' onChange={toggleTheme} checked={theme === 'light'}/>
                <span className="toggle-moon-icon"></span>
                <span className="toggle-sun-icon"></span>
                <span className="slider"></span>
            </label>
        </div>
    )
};

export default Header;