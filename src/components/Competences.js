import React from 'react';
import { comptencesData } from '../assets/data';
import Pagetitle from './Pagetitle';
const lists = comptencesData

const Competences = (props) => {
    return (
        <div className='w-full px-5 md:px-16 py-20'>
            <Pagetitle text="competences"/>
            <div className='rounded-sm p-2 text-white'>
                <p className='text-justify'>My competences are varied . But  my preffered job is fullstack developper . I have high knowledge in IT and i'm still learning more to improve every day . 
                    My high capacity of adaptivity in new technology is my very important power . There are my competences : 
                </p>
                <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2'>
                {
                    lists.map((e,index)=>
                    <div className='border border-slate-50 text-xl p-4'>
                        <div className='top-0 w-full m-0 font-bold text-blue-500'>{e.title.toLocaleUpperCase()}</div>
                        <p>{e.list.map((elt,index)=>
                            <>{index != e.list.length-1 ? elt + " , " : elt}</>
                        )} </p>
                    </div>                    
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default Competences;