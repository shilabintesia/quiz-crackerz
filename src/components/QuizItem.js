import React, { useContext } from 'react';
import { NoteContext } from '../Utilities/Main';
import Note from './Note';


const QuizItem = () => {
    const quizes = useContext(NoteContext);

    return (
        <div>
              <div className='grid md:grid-cols-3 w-9/12 m-auto gap-2 mt-20'>
          {
            quizes.map(note=><Note 
                key={note.id}
                note={note}
            ></Note>)
          }
        </div>
        </div>
    );
};

export default QuizItem;