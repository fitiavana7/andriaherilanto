import React from 'react';

const Ending = (props) => {
    return (
        <div className='flex text-md text-white justify-center sm:justify-between items-center h-14 w-full px-5 md:px-16'>
            <div className='font-bold sm:block hidden'>
                {"<"} FITIAVANA {"/>"}
            </div>
            <div>
                <p>Fitiavana copyright {new Date().getFullYear() } &copy;</p>
            </div>
        </div>
    );
};

export default Ending;