import React from 'react';
import { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header/Header';

import searchIcon from '../images/icons8-search-50.png';


export default function SearchBar ({data}) {

    const [cauta, setCauta] = useState(() => data);
    const [icon, setIcon] = useState(() => 'search-icon');

    const filtruCautare = (event) => {
        const cuvInput = event.target.value;
        const newFiltru = data.filter((x) => {
            let rez = x.toLowerCase().includes(cuvInput.toLowerCase());
            return rez;
        })
        newFiltru.sort(()=> cuvInput);
        setCauta(newFiltru);
        (cuvInput.length > 0) ? setIcon('search-icon-off') : setIcon('search-icon');
    }

    return (<>
                <Header/>
                <main className="main">
                    <label><input type="search" placeholder='Search here...' onChange={filtruCautare}/>
                    <img className={icon} src={searchIcon} alt="..."/></label>
                    {
                        (cauta.length !== 0) ? 
                            <div>{cauta.map((inreg, index) => {
                                return <p key={index} className="inreg">{inreg}</p>
                            })}</div>        :
                            <div>no results found...</div>
                    }
                </main>
                <Footer/>
            </>)
}