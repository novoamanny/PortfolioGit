import React, {useState, useEffect, useLayoutEffect} from 'react';

import Nav from './Nav/Nav';
import NavSlide from './NavSlide/NavSlide';

import './Navigation.css';

const Navigation = () =>{


    useLayoutEffect(() =>{
        document.addEventListener('resize', () =>{
            console.log('header')
        })
    })
    

    const [width, setWidth] = useState('20%');

    

    const onLoad = () =>{
        setTimeout(() => {
            document.getElementById('left-slider').classList.add('slide');
            
            document.getElementById('details').style.display = 'contents';
            document.getElementById('icons').classList.remove('icons-off');
            document.getElementById('Nav').classList.remove('Nav-off');
            
            
            
        },200)

    }

    

    const openSlide = () =>{

        document.getElementById('mob-slider').style.width = '20%';
        
        document.getElementById('open').classList.remove('nav-btn');
        document.getElementById('open').classList.add('nav-btn-off');
        document.getElementById('close').classList.remove('nav-btn-off');
        document.getElementById('close').classList.add('nav-btn');
        document.getElementById('image-mob').classList.remove('image-off');

        document.getElementById('details-mob').style.display = 'contents';
        document.getElementById('icons-mob').classList.remove('icons-off')
        
        document.getElementById('Nav-mob').classList.remove('Nav-off');
    }
    const closeSlide = () =>{
        
        document.getElementById('mob-slider').style.width = '0';
        
        
        document.getElementById('close').classList.remove('nav-btn');
        document.getElementById('close').classList.add('nav-btn-off');
        document.getElementById('open').classList.remove('nav-btn-off');
        document.getElementById('open').classList.add('nav-btn');
        document.getElementById('image-mob').classList.add('image-off');
        document.getElementById('details-mob').style.display = 'none';
        document.getElementById('icons-mob').classList.add('icons-off')
        document.getElementById('Nav-mob').classList.add('Nav-off');
    }

    


    return(
        <div>
            <div id='left-slider' className='picture-container'>
            
                <div className='image-center'>
                    <div className='image' ></div>
                </div>
                <div id='details' className='details'>
                    
                    <p>Hello, My name is Manuel Novoa and I am a Software Developer. Welcome to my personal website.</p>
                </div>
                <div id='icons' className='icons icons-off'>
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

                <Nav/>

                <div className='ver'>
                    <li>1.1</li>
                </div>
                
                {onLoad()}

                
                
            </div>
            <NavSlide openSlide={openSlide} closeSlide={closeSlide}/>
            
        </div>
    )
}

export default Navigation;