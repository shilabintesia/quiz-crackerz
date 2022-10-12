import React, { useState } from 'react';
import Option from './Option';
import '../assets/Question.css';
const Question = ({questions,correct, setCorrect, wrong, setWrong}) => {
   
    const {options, question, correctAnswer} = questions ;
    // console.log(questions)
    const handleCorrect = (answer)=>{
        if(correctAnswer === answer) {
            alert('right');
            setCorrect(correct+1);
            return 'active';
        }
        else{
            alert('wrong');
            setWrong(wrong+ 1);
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