import React from 'react';
import PictureProfile from '../assets/pics/fitiavana.jpg';
const Profile = (props) => {
    return (
        <div className='w-full px-5 md:px-16'>
            <div className='flex justify-around items-start flex-col md:flex-row py-10'>
                <img src={PictureProfile} alt="fitiavana profile pic" className='mb-4 md:m-0 w-52 rounded-sm' />
                <div className='m-0 md:ml-3 text-white w-full md:w-2/3'>
                    <p className='text-3xl font-bold text-blue-500'>FITIAVANA</p>
                    <p className='text-justify'>
                        Fitiavana Aina Andriaherilanto , known as Fitiavana . I'm a fullstack developper and data scientist , AI student at <a href="" className='italic'>ENI Fianarantsoa</a> .
                        I'm specialized on MERN stack developping , but i can developp on different language . As for now , i'm learning AI development to enhance my perfomance and give more 
                        options to my clients . My high competence in IT , such as knowledge of System and Network , Machine learning help me more on my developments .
                        Explorating data using python and his library too is one of my competences . 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;