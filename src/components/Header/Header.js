import React, { useContext } from "react";

import NavBar from "./NavBar"
import { ThemeContext } from "../Contexts/ThemeContext";
import myLogo from "../images/my_logo.png"

const Header = () => {

    const {toggleTheme, theme} = useContext(ThemeContext);

    let className = "header";
    const navList = [{buton1: 'CAREER', buton2: 'PROJECTS', buton3: 'CV', buton4: 'ABOUT ME'}];

    return (
        <div className = {`${className}`}>
            <h1 title="Emanuel Caradan - My Site"><a href="/"><img src={myLogo} alt="my site logo"/>MANU</a></h1>
            {navList.map((buton) => {
                return <NavBar
                    key = {buton.buton1}
                    cariera = {buton.buton1}
                    proiecte = {buton.buton2}
                    cv = {buton.buton3}
                    despre = {buton.buton4}
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