import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Puzzle = () => {
    const quiz = useLoaderData();
    const [correct, setCorrect] = useState(0);

    const [wrong, setWrong] =useState(0)
    const {total, name, questions} = quiz.data;
    // console.log(questions)
    
    return (
        <div>
           <div>
                <h2 className="text-3xl">{name}</h2>
                <h2 className="text-3xl">Total Quiz : {total}</h2>
               <div className='flex justify-evenly mt-5'>
               <h2 className="text-3xl">Right Answer:{correct}</h2>
               <h2 className="text-3xl">Wrong Answer:{wrong}</h2>
               </div>
           </div>
           <div>
                {
                    questions.map(question=><Question
                    questions={question}
                    key={question.id}
                    correct={correct}
                    setCorrect={setCorrect}
                    wrong={wrong}
                    setWrong={setWrong}
                    ></Question>)
                }
           </div>
        </div>
    );
};

export default Puzzle;