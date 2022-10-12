import React, { useState } from 'react';
import Option from './Option';
const Question = ({questions, }) => {
   
    const {options, question, correctAnswer} = questions ;
    // console.log(questions)
    const handleCorrect = (answer)=>{
        if(correctAnswer === answer) {
            alert('right');
           
            return 'active';
        }
        else{
            alert('wrong');
          
        }
    }
    return (
        <div className='border-2 w-9/12 mx-auto mt-10'>
            
            <ol>
                <li>{question}
              
                </li>
              
            </ol>
            <div className='m-5'>
            {
                    options.map((option, idx)=><Option
                    key={idx}
                        option={option}
                        handleCorrect={handleCorrect}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;