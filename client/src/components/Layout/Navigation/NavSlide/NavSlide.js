import React from 'react';
import './NavSLide.css'

import NavLinks from './NavLinks/NavLinks';

const NavSlide = ({openSlide, closeSlide}) =>{
    return(
        <div className='mob-nav'>
                <div id='open' className='nav-btn' onClick={() => openSlide()}>
                    <i className="fas fa-bars"></i>
                </div>
               


                <div id='mob-slider' className='picture-container-mob'>

                <div id='close' className='nav-btn-off' onClick={() => closeSlide()}>
                    <i className="">X</i>
                </div>
            
                    <div className='image-center'>
                        <div id='image-mob' className='image image-off' ></div>
                    </div>
                    <div id='details-mob' className='details'>
                        
                        <p>Hello, My name is Manuel Novoa and I am a Software Developer. Welcome to my personal website.</p>
                    </div>
                    <div id='icons-mob' className='icons-mob icons-off'>
                        <div className='gitIcon icon'>
                            <a href='https://github.com/novoamanny'><i className="fab fa-github"></i></a>
                        </div>
                        {/* <div className='faceIcon icon'>
                            <a href='https://github.com/novoamanny'><i className="fab fa-facebook"></i></a>
                        </div>
                        <div className='twitterIcon icon'>
                            <a href='https://github.com/novoamanny'><i className="fab fa-twitter"></i></a>
                        </div> */}
                        
                    </div>

                    <div className='notice'>
                        {/* <li>* More code can be provided if needed.</li> */}
                        
                    </div>

                    <NavLinks closeSlide={closeSlide}/>

                    <div className='ver'>
                        <li>1.1</li>
                    </div>
                    
                    

                
                
            </div>
        </div>
    )
}

export default NavSlide;