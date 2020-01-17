import React, {useState, Fragment} from 'react';
import Typist from 'react-typist';



const TypeWriter = () =>{

    const text = ['UI/UX Designer', 'Web Developer', 'Mobile Developer']
    
    let index = 0;
    
    // const type = () =>{
    //     if(index = 0){
    //         index++;
    //         return text[index-1];
    //     }else if(index = 1){
    //         index++;
    //         return text[index-1];
    //     }
    //     else{
    //         index = 0;
    //         return text[text.length-1];
    //     }
    // }

    

    return(
        <div className='TypeWriter'>
            
            <h3>
                <Typist avgTypingDelay={225}>
                    
                    {text[0]}
                    <Typist.Backspace count={text[0].length} delay={300} />
                    <Typist.Delay ms={300}/>
                    {text[1]}
                    <Typist.Backspace count={text[1].length} delay={300} />
                    <Typist.Delay ms={300}/>
                    {text[2]}
                    
                </Typist>
            </h3>
            
        </div>
    )
}

export default TypeWriter;