import React, {useEffect} from 'react';
import './Projects.css'

const Projects = () =>{

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const projects = [
        {
            name: 'Dev-Link',
            date: 'Fall/2019',
            desc: [
                'Social Network Full Stack Project',
                'Users are allowed to create an account and add their information for others to view.',
                'Skills, projects, education, and experience are some of the information that users may share.',
                'In addition, users may post/delete on the Dev-Link feed for others to read.',
                'Each post may be commented and liked accordingly…'
            ],
            environment: [
                'HTML5',
                'CSS',
                'JavaScript',
                'React',
                'Redux',
                'NodeJS',
                'MongoDB'
            ]
        },
        {
            name: 'Nuno (Blog)',
            date: 'Summer/2019',
            desc: [
                'Users are allowed to post/delete blogs accordingly.',
                'In addition, accounts may be created and deleted only by the main admin account.'

            ],
            environment: [
                'HTML5',
                'CSS',
                'JavaScript',
                'React',
                'Redux',
                'NodeJS',
                'MongoDB'
            ]
        },
        {
            name: 'Los Dos Chupacabras (Podcast/Blog)',
            date: 'Spring/2019',
            desc: [
                'Los Dos Chupacabras main website…',
                'Users are allowed to post/delete blogs accordingly.',
                'In addition, accounts may be created and deleted only by the main admin account.'
                

            ],
            environment: [
                'HTML5',
                'CSS',
                'JavaScript',
                'React',
                'Redux',
                'Python',
                'Django',
                'PostgreSQL'
            ]
        },
        {
            name: 'Clima (Weather App)',
            date: 'Fall/2018',
            desc: [
                'Clima displays current weather conditions according to the user\'s location...'
            ],
            environment: [
                'IOS',
                'Swift 4',
                'Xcode'
            ]
        },
        {
            name: 'M.I.C.E (Mavs Ice Cream Emporium)',
            date: 'Spring/2018',
            desc: [
                'Allows users to create an account as a patron, server, manager, or owner.',
                'Users can customize their ice cream according to their preference in flavors.',
                'Owners/Managers are allowed to add/delete accounts, flavors, orders.'

            ],
            environment: [
                'C++',
                'Virtual Machine',
                'Linux'
            ]
        },
        {
            name: 'Library Management System',
            date: 'Spring/2018',
            desc: [
                'Allows users to create an account as a patron, or a manager.',
                'Users can check in/out books, magazines, or articles.',
                'Manager accounts are allowed to add/delete items on the archive. In addition, items can be categorized as a book, magazine, or an article.'

            ],
            environment: [
                'C++',
                'Virtual Machine',
                'Linux'
            ]
        },
        {
            name: 'Flash (Message App)',
            date: 'Fall/2017',
            desc: [
                'Users may create an account and send/receive messages'

            ],
            environment: [
                'React Native',
                'JavaScript'
                
            ]
        },
    ]

    const load = (index) =>{
        setTimeout(() => {
            document.getElementById(`proj-${index}`).style.opacity = 1;
        }, 300 + index * 100);
    }

    return(
        <div id='projects' className='projects'>
            {projects.map((project, index) =>{
                let options = 'project';

                if(index === 0){
                    options += ' br-first';
                }
                if(index === projects.length - 1){
                    options += ' br-last';
                }

                return(
                    <div key={index} id={`proj-${index}`} className={options}>
                        <div>
                            <div className='project-title'>
                                <h4>{project.name}</h4>
                            </div>
                            <div className='project-details'>
                                {project.desc.map(item =>{
                                    return(
                                    <li key={item}>{item}</li>
                                    )
                                })}

                            </div>
                        </div>
                        <div className='environment'>
                            <div className='env-title'>
                                <span>Environment: </span>
                            </div>
                            <div className='list-env'>
                                {project.environment.map( item =>{
                                    return(
                                    <span key={item}>{item}</span>
                                    )
                                })}
                            </div>
                            
                        </div>    
                        {load(index)}
                    </div>
                )
            })}
            
        </div>
    )
}

export default Projects;