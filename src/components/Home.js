import React, { useContext } from 'react';
import { NoteContext } from '../Utilities/Main';
import Note from './Note';
import { BeakerIcon } from '@heroicons/react/24/solid'
const Home = () => {
    const notes = useContext(NoteContext);
    console.log(notes)
    return (
        <div className="home-container  bg-[#FFF5E4]">
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    
    <div className='grid md:grid-cols-3 w-9/12 m-auto gap-6 mt-20'>
          {
            notes.map(note=><Note 
                key={note.id}
                note={note}
            ></Note>)
          }
        </div>
        </div>




    );
};

export default Home;