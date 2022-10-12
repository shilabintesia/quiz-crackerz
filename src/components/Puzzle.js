import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Puzzle = () => {
    const quiz = useLoaderData();
   
    const {total, name, questions} = quiz.data;
    // console.log(questions
    
    return (
        <div>
           <div>
                <h2 className="text-3xl">{name}</h2>
                <h2 className="text-3xl">Total Quiz : {total}</h2>
               
           </div>
           <div>
                {
                    questions.map(question=><Question
                    questions={question}
                    key={question.id}
                    ></Question>)
                }
           </div>
        </div>
    );
};

export default Puzzle;