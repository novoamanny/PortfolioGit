import React from 'react';

import './Edu.css';

import img from '../../../images/UTA.jpeg'
import img2 from '../../../images/mav.png';
import img3 from '../../../images/east.jpg'
import img4 from '../../../images/EFC-vertical-RGB.png'

const Edu = () =>{
    const data = {
        education:{
            category: 'Education',
            edu:[
                {
                    school: 'The University of Texas at Arlington',
                    degree: 'B.S. Computer Science',
                    gradDate: 'May 2018',
                    path: '../../images/UTA.jpeg'
                },
                {
                    school: 'DCCCD Eastfield Community College',
                    degree: 'A.S. Science',
                    gradDate: 'Aug/2013 - May/2016',
                    path: '../../images/UTA.jpeg'
                }
            ]
        },
        experince:{
            category: 'Experience',
            exp:[
                {
                    name: 'Code Ninja | Corporate Office',
                    position: 'Full Stack Web Developer',
                    dates: 'June/2018 - October/2019',
                    res:[
                        'Set and enforce best software development practices.',
                        'Implement new features and improve existing ones.',
                        'Software planning and testing features.',
                        'Redesign Web App',
                        'Implement custom API\'s'
                    ]
                },
                {
                    name: 'State Farm',
                    position: 'UI Developer',
                    dates: 'Summer/2017 - Spring/2018',
                    res:[
                        'Assist in development work of web applications.',
                        'Implement new features that function across several software aplications.',
                        'Review and debug code for quality.'
                    ]
                }
            ]
        }
    }

    const load = (index) =>{
        setTimeout(() => {
            document.getElementById(`edu-${index}`).style.opacity = 1;
        }, 300 + index * 100);
        
    }

    return(
        <div className='education'>
            {data.education.edu.map((edu, index) =>{
                let options = 'edu';
                let images = [img, img2, img3, img4];


                if(index === 0){
                    options += ' br-first';
                }
                if(index === data.education.edu.length - 1){
                    options += ' br-last';
                }

                return(
                    <div key={index} id={`edu-${index}`} className={options}>
                        <div>
                            <div className='edu-title'>
                                <h4>{edu.school}</h4>
                            </div>
                            <div className='edu-details'>
                                <li>{edu.degree}</li>
                                <li>{edu.gradDate}</li>
                            </div>
                        </div>

                        <div className='sch-img'>

                            <div className='sch-logo'>
                                <img className={index === 0 ? 'sch-image-2' : 'sch-image-3'} src={index === 0 ? images[1] : images[3]}/>
                            </div>

                            <div className='sch-image-con'>
                            <img className='sch-image' src={index === 0 ? images[0] : images[2]}/>
                            </div>
                            
                            
                        </div>
                           
                        {load(index)}
                    </div>
                )
            })}
            
        </div>
    )
}

export default Edu;