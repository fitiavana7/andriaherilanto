import React from 'react';
import Pagetitle from "./Pagetitle";
import {HomeOutlined , MailOutlined , PhoneOutlined , FacebookOutlined , GithubOutlined , LinkedinOutlined , GoogleOutlined} from '@ant-design/icons';
const Contact = (props) => {
    return (
        <div className='w-full px-5 py-20 md:px-16 text-white'>
            <Pagetitle text="contact"/>
            <p className='text-justify'>
                Let'as talk about your projects . I'm available if you need a professional to developp your application . 
                And i'm here too to help you on your data science project , project management , databases administration . 
                You can message me on these contact :)
            </p>
            <div className=''>
                <div className='py-10'>
                    <div className='flex justify-start items-center'>
                        <span className='w-10 h-10 flex justify-center mr-2 items-center border border-white p-2 text-lg rounded-full'><HomeOutlined/></span>
                        <span className='text-xl'>Fianarantsoa , Madagascar</span>
                    </div>
                    <div className='flex justify-start my-5 items-center'>
                        <span className='w-10 h-10 flex justify-center mr-2 items-center border border-white p-2 text-lg rounded-full'><PhoneOutlined/></span>
                        <span className='text-xl'>034 32 446 94</span>
                    </div>
                    <div className='flex justify-start items-center'>
                        <span className='w-10 h-10 flex justify-center mr-2 items-center border border-white p-2 text-lg rounded-full'><MailOutlined/></span>
                        <span className='text-xl'>ainaandriaherilanto @gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center text-blue-500'>
                <a href="https://www.facebook.com/fitiavana.andriaherilanto" target="_blank" className='mr-2'>
                    <button className='text-white p-3 rounded-full text-4xl bg-blue-500 flex justify-center items-center '>
                        <FacebookOutlined/>
                    </button>
                </a>
                <a href="https://www.github.com/fitiavana7" target="_blank" className='mr-2'>
                    <button className='text-white p-3 rounded-full text-4xl bg-blue-500 flex justify-center items-center '>
                        <GithubOutlined/>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/fitiavana-andriaherilanto" target="_blank" className='mr-2'>
                    <button className='text-white p-3 rounded-full text-4xl bg-blue-500 flex justify-center items-center '>
                        <LinkedinOutlined/>
                    </button>
                </a>
                <a href="https://ainaandriaherilanto@gmail.com" target="_blank">
                    <button className='text-white p-3 rounded-full text-4xl bg-blue-500 flex justify-center items-center '>
                        <GoogleOutlined/>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Contact;