import React, { useState } from 'react';
import BackButton from '../../Main/BackButton/BackButton';

import './SearchBar.css';

import searchIcon from '../../Media/icons8-search-50.png';


export default function SearchBar ({data}) {

    const [cauta, setCauta] = useState(() => data);
    const [icon, setIcon] = useState(() => 'search-icon');

    const filtruCautare = (event) => {
        const cuvInput = event.target.value;
        const newFiltru = data.filter((x) => {
            let rez = x.toLowerCase().includes(cuvInput.toLowerCase());
            console.log(rez)
            return rez;
        })
        newFiltru.sort(()=> cuvInput);
        console.log(newFiltru)
        setCauta(newFiltru);
        (cuvInput.length > 0) ? setIcon('search-icon-off') : setIcon('search-icon');
    }

    return (<main className="main">
                <div>
                    <h4 className='main-h4'>Search Bar</h4>
                    <BackButton/>
                    <div className='main-search-bar'>
                        <label>
                            <input type="search" placeholder='Search here...' onChange={filtruCautare}/>
                            <img className={icon} src={searchIcon} alt="..."/>
                        </label>
                    </div>
                </div>
                    
                    {
                        (cauta.length !== 0) ? 
                            <div className='main-div-2'>{cauta.map((inreg, index) => {
                                return <p key={index} className="inreg">{inreg}</p>
                            })}
                            </div>           :
                            <div className='main-div-3'>no results found...</div>
                    }
            </main>)
}