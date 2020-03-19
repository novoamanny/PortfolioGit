import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'


const Nav = ({closeSlide}) =>{

    useEffect(() => {
        
    }, [window.innerWidth])

    const activeHandle = (url) =>{

        
        
        if(url === '/'){

            document.getElementById('edb').classList.contains('active-link')
            && document.getElementById('edb').classList.remove('active-link');

            document.getElementById('exb').classList.contains('active-link')
            && document.getElementById('exb').classList.remove('active-link');

            document.getElementById('plb').classList.contains('active-link')
            && document.getElementById('plb').classList.remove('active-link');

            !document.getElementById('alb').classList.contains('active-link')
            && document.getElementById('alb').classList.add('active-link');

            if(window.innerWidth <= 1150){
                closeSlide();
            }
            
        }
        if(url === '/edu'){

            document.getElementById('alb').classList.contains('active-link')
            && document.getElementById('alb').classList.remove('active-link');

            document.getElementById('exb').classList.contains('active-link')
            && document.getElementById('exb').classList.remove('active-link');

            document.getElementById('plb').classList.contains('active-link')
            && document.getElementById('plb').classList.remove('active-link');

            !document.getElementById('edb').classList.contains('active-link')
            && document.getElementById('edb').classList.add('active-link');
            if(window.innerWidth <= 1150){
                closeSlide();
            }
                
        }
        if(url === '/exp'){

            document.getElementById('alb').classList.contains('active-link')
            && document.getElementById('alb').classList.remove('active-link');

            document.getElementById('edb').classList.contains('active-link')
            && document.getElementById('edb').classList.remove('active-link');

            document.getElementById('plb').classList.contains('active-link')
            && document.getElementById('plb').classList.remove('active-link');

            !document.getElementById('exb').classList.contains('active-link')
            && document.getElementById('exb').classList.add('active-link');
            if(window.innerWidth <= 1150){
                closeSlide();
            }
                
        }
        if(url === '/portfolio/archive'){
        
            document.getElementById('alb').classList.contains('active-link')
            && document.getElementById('alb').classList.remove('active-link');

            document.getElementById('edb').classList.contains('active-link')
            && document.getElementById('edb').classList.remove('active-link');

            document.getElementById('exb').classList.contains('active-link')
            && document.getElementById('exb').classList.remove('active-link');

            !document.getElementById('plb').classList.contains('active-link')
            && document.getElementById('plb').classList.add('active-link');
            if(window.innerWidth <= 1150){
                closeSlide();
            }
        }
    }

    const classNotActive = 'link'
    const classActive = 'link active-link'

    return(
        <div id='Nav-mob' className='Nav Nav-off'>
            
            <div id='links' className='nav-links'>
                <div className='nav-link'>
                    <Link id='alb' className={window.location.pathname === '/' ? classActive : classNotActive} onClick={() => activeHandle('/')} to='/'>
                        <i className='fas fa-user '></i>
                        <span id='al' className='link-text' >About</span>
                    </Link>
                </div>

                <div className='nav-link'>

                    <Link id='edb' className={window.location.pathname === '/edu' ? classActive : classNotActive} onClick={() => activeHandle('/edu')} to='/edu' >
                        <i  className='fas fa-graduation-cap'></i>
                        <span id='ed' className='link-text' >Education</span>
                    </Link>
                    
                </div>

                <div className='nav-link'>
                    <Link id='exb' className={window.location.pathname === '/exp' ? classActive : classNotActive} onClick={() => activeHandle('/exp')} to='/exp' >
                        <i className='fas fa-briefcase '></i>
                        <span id='ex' className='link-text' >Experience</span>
                    </Link>
                </div>

                <div className='nav-link'>

                    <Link id='plb' className={window.location.pathname === '/portfolio/archive' ? classActive : classNotActive} onClick={() => activeHandle('/portfolio/archive')} to='/portfolio/archive' >
                        <i  className='fas fa-code'></i>
                        <span id='pl' className='link-text' >Portfolio</span>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Nav;