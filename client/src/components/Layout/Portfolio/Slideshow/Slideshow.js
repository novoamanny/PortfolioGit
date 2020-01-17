import React from 'react'

import { Slide } from 'react-slideshow-image';
import image1 from '../../../../images/burger.png'
import image2 from '../../../../images/smartbrain.png'
import image3 from '../../../../images/Acme.png'
import image4 from '../../../../images/grid.png'


import './Slideshow.css'


const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      
    }
  }

const Slideshow = () =>{
    return(
        <div className='slide-container' >
            <Slide {...properties}>
                <div className="each-slide">
                    <a href="https://novoa-burgers.netlify.com/" target='_blank'>
                    <div className='slide-image' style={{'backgroundImage': `url(${image1})`}}>
                    <span>Burger Builder</span>
                    </div>
                    </a>
                </div>
                <div className="each-slide">
                    <a href="https://smartbrain-novoa.netlify.com/" target='_blank'>
                    <div className='slide-image' style={{'backgroundImage': `url(${image2})`}}>
                    <span>Smart Brain</span>
                    </div>
                    </a>
                </div>
                <div className="each-slide">
                    <a href="https://novoa-aws.netlify.com/" target='_blank'>
                    <div className='slide-image' style={{'backgroundImage': `url(${image3})`}}>
                    <span>Acme Web Solutions</span>
                    </div>
                    </a>
                </div>
                <div className="each-slide">
                    <a href="https://novoas2.netlify.com/" target='_blank'>
                    <div className='slide-image' style={{'backgroundImage': `url(${image4})`}}>
                    <span>Sample</span>
                    </div>
                    </a>
                </div>
            </Slide>

        </div>
    )
    
}


export default Slideshow;