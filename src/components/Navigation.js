import { PhoneOutlined } from '@ant-design/icons';
import React from 'react';

const Navigation = (props) => {
    return (
        <div className='flex text-white bg-[#040a1f] justify-between items-center h-14 fixed top-0 left-0 w-full px-5 md:px-16'>
            <div className='font-bold'>
                {"<"} FITIAVANA {"/>"}
            </div>
            <div>
                <a href="tel:0343244694">
                    <button className='py-1 px-2 rounded-sm bg-blue-500 flex justify-center items-center text-base'>
                        <PhoneOutlined/> <span className='ml-1 hidden sm:block'>contact me</span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Navigation;