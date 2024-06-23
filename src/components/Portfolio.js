import React from 'react';
import Pagetitle from './Pagetitle';
import ImageEg from "../assets/pics/test.JPG";
import {EyeOutlined} from "@ant-design/icons";
import { projectsData } from '../assets/data';
const Portfolio = (props) => {

    const projects = projectsData

    return (
        <div className='w-full px-5 py-20 md:px-16'>
            <Pagetitle text="portfolio"/>
            <div className='p-2 text-white'>
                <p className='text-justify'>
                These are my projects i've done . These aren't yet deployed but i still try to find solutions to host it . 
                Projects done from my internship aren't there because it belongs to the company . I've done Website , Desktop App , Mobile App . 
                </p>            
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    projects.map((e,index)=>
                <div key={index} className='bg-slate-50 rounded-sm text-black p-4'>
                    <img src={e.pic} alt="project pic" className='rounded-sm' />
                    <div className='w-full mt-3 text-2xl font-bold text-blue-500'>{e.title.toLocaleUpperCase()}</div>
                    <p className='font-bold text-lg mb-4'>
                    {e.technos.map((elt,index)=>
                            <>{index != e.technos.length-1 ? elt + " , " : elt}</>
                        )} </p>
                    <p className='text-justify'>
                    {e.description}
                   </p>
                    <div className='flex justify-end items-center py-2'>
                        <a href="https://www.github.com/fitiavana7" target="_blank">
                            <button className='py-1 px-2 rounded-sm text-white bg-blue-500 flex justify-center items-center text-base'>
                                <EyeOutlined/> <span className='ml-1'>view</span>
                            </button>
                        </a>
                    </div>
                </div>      
                    )
                }
                
            </div>
        </div>
    );
};

export default Portfolio;