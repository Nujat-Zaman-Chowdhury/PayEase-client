import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='flex flex-col justify-center items-center p-16'>
            <img src="welcome.png" alt="welcome" />
            <h1 className='text-3xl text-sky-600 font-semibold mt-4'>Welcome To Our PayEase</h1>
            <p className='text-gray-500 text-lg w-[500px] text-center font-medium my-3'>Elevate Your Transaction Experience with Absolute Security and Dependability</p>
            <Link to="/login" className='w-full flex justify-center'><button className='w-[35%] bg-sky-600 text-white px-4 py-2 rounded-md shadow'>Get Started</button></Link>
        </div>
    );
};

export default Welcome;