import React, {useEffect} from  'react';
import './Bio.css'

import image from '../../../images/IMG.JPG';
import BioAbout from './BioAbout/BioAbout';
import Summary from './Summary/Summary';
import WebExp from './WebExp/WebExp';
import MobExp from './MobExp/MobExp';


const Bio = () =>{

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const onLoadHandle = () =>{
        setTimeout(() =>{
            let temp = document.getElementById('about')
            temp.style.opacity = 1;
        }, 400)
        setTimeout(() =>{
            let temp = document.getElementById('summary')
            temp.style.opacity = 1;
        }, 500)
        setTimeout(() =>{
            let temp = document.getElementById('webexp')
            temp.style.opacity = 1;
        }, 600)
        setTimeout(() =>{
            let temp = document.getElementById('mobexp')
            temp.style.opacity = 1;
        }, 700)
        
    }
    return(
       
        <div className='Bio'>
            
            <BioAbout/>
            <Summary/>
            <WebExp/>
            <MobExp/>
            {onLoadHandle()}
        </div>
    )
}

export default Bio;