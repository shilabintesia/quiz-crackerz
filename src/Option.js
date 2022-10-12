import React, { useState } from 'react';

const Option = ({option,handleCorrect}) => {
    return (
        <div className='border-2 m-5 p-2 text-2xl'>

       
       <button className='' onClick={()=>handleCorrect(option)}>
             {option}
             </button>
        </div>
    );
};

export default Option;