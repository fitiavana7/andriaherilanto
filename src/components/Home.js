import React from 'react';
import { FilePdfOutlined } from '@ant-design/icons';

const Home = (props) => {

    return (
        <div className='w-full h-screen flex justify-center items-center px-5 md:px-16'>
            <div className='w-full lg:w-2/3 text-white px-5 md:p-0 '>
                <p>HELLO , I'M</p>
                <p className='flex items-center text-blue-500 font-bold text-4xl '>FITIAVANA <span className='ml-2 hidden sm:block'>ANDRIAHERILANTO</span></p>
                <div className='flex md:items-center md:flex-row flex-col items-start'>
                    <p className='text-2xl mt-1'>FULLSTACK DEVELOPPER</p> <p className='mx-2 text-2xl hidden md:block'>||</p>
                    <p className='text-2xl mt-1'>DATA SCIENTIST</p> 
                </div>
                <div className='mt-3'>
                    <a href="">
                        <button className='py-2 px-2 rounded-sm bg-blue-500 flex justify-center items-center text-base'>
                            <FilePdfOutlined /> <span className='ml-1'>download my cv</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;