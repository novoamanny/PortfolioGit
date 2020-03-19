import React from 'react';

import './Exp.css';

const Exp = () =>{
    const data = {
        
        experince:{
            category: 'Experience',
            exp:[
                {
                    name: 'Code Ninja | Corporate Office',
                    position: 'Full Stack Web Developer',
                    dates: 'June/2018 - March/2020',
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
                    dates: 'Summer/2017 - September/2017',
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
            document.getElementById(`exp-${index}`).style.opacity = 1;
        }, 300 + index * 100);
        
    }

    return(
        <div className='experience'>
            {data.experince.exp.map((exp, index) =>{
                let options = 'exp';

                if(index === 0){
                    options += ' br-first';
                }
                if(index === data.experince.exp.length - 1){
                    options += ' br-last';
                }

                return(
                    <div key={index} id={`exp-${index}`} className={options}>
                        <div>
                            
                                <div className='exp-title'>
                                    <h4>{exp.name}</h4>
                                </div>
                                <div className='exp-date'>
                                    <h6>{exp.dates}</h6>
                                </div>
                            
                            <div className='exp-pos'>
                                <h5>{exp.position}</h5>
                            </div>
                            <div className='exp-details'>
                                {exp.res.map(item => <li key={item}>{item}</li>)}
                            </div>
                        </div>
                           
                        {load(index)}
                    </div>
                )
            })}
            
        </div>
    )
}

export default Exp;