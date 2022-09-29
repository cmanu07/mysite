import React from 'react';
import { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header/Header';
import BackButton from '../Main/BackButton';

import searchIcon from '../Media/icons8-search-50.png';


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
                    <div className='main-div'>
                        <BackButton className='main-div-butt'/>
                        <label>
                            <input type="search" placeholder='Search here...' onChange={filtruCautare}/>
                            <img className={icon} src={searchIcon} alt="..."/>
                        </label>
                    </div>
                    {
                        (cauta.length !== 0) ? 
                            <div className='main-div-2'>{cauta.map((inreg, index) => {
                                return <p key={index} className="inreg">{inreg}</p>
                            })}
                            </div>           :
                            <div className='main-div-3'>no results found...</div>
                    }
                </main>
                <Footer/>
            </>)
}