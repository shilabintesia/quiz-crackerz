import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import NavBar from '../components/NavBar';

export const  NoteContext  =  createContext([]) 
const Main = () => {
    const {data} = useLoaderData();
   
    return (
        <div>
           <NoteContext.Provider value={data}>
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                  
           </NoteContext.Provider>
        </div>
    );
};

export default Main;