import React from 'react';

import TypeWriter from './TypeWriter/TypeWriter';

import './Landing.css'

const Landing = () =>{
    return(
        <div className='Landing'>
            <div className='landing-bg'></div>
            <div className='landing-text'>
                <div className='text-one'>
                <h3>Manuel Novoa</h3>
                </div>
                <div className='text-two'>
                <TypeWriter/>
                </div>
                
            </div>
            <div className='version'>
                <p>0.1</p>
            </div>
        </div>
    )
}

export default Landing;