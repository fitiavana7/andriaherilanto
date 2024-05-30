import React from 'react';

const Pagetitle = (props) => {
    return (
        <p className='text-blue-500 font-bold text-4xl py-4'>{props.text.toLocaleUpperCase()}</p>
    );
};

export default Pagetitle;