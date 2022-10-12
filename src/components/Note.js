import React from 'react';
import { Link } from 'react-router-dom';
const Note = ({note}) => {
    const {id, name, logo, total} = note;
    return (
        <div className='border-2 shadow-gray-600 rounded-md border-black bg-[#e6b6b6] ' >
            <div className='md:h-[200px]  h-[150px] text-center'>
                <img className='h-full w-full object-fill' src={logo} alt="Images Not Available" />

            </div>
            <div className='card-info m-5 text-2xl md:text-3xl h-[80px]'>
                <p> Topic : <span className='font-bold '> {name}</span> </p>
                <p> Total Quiz: <span className='font-extrabold '> {total}</span></p>
            </div>
            <Link to={`/puzzle/${id}`}>
                <button className=' bg-blue-600 text-2xl text-white  font-bold rounded-full py-3 px-10 w-9/12 mb-5'>
               Starts Quiz
                </button>
                </Link>
            
        </div>
    );
};

export default Note;