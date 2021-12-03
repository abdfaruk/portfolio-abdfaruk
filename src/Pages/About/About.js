import React from 'react';

const About = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-4xl font-bold text-left mt-10 mb-5 '>About Me</h1>
            <div>
                <h2>Hi, i am Abdullah</h2>
                <p>
                I’m an undergraduate student majoring in Computer Science and Engineering at <a className='font-bold text-yellow-600' href='https://www.recr.edu.bd/'>Rangpur Engineering College</a>. This college affiliate by <a className='font-bold text-yellow-600' href='http://www.ru.ac.bd/'>University of Rajshahi</a>. My interests are in backend Web Development, Native app development. For more info, check out my <a className='font-bold text-yellow-600' href='https://drive.google.com/file/d/1ZEr8FCpbNaT_ED99zAj8GA69JpebKvJp/view?usp=sharing'>resume</a>.
                </p>

                <p>
                    My enthusiasm is for softwere engineering ,cloud computing and serverless technologies . My moto is to convert my thought into App 
                </p>

                <p className='font-bold  text-2xl my-5'> Web Development Experience</p>
                <p>
                Though i have no experience in jobs but i have some full stack projects which have been listed in my resume as well as my   <a className='font-bold text-yellow-600' href='https://github.com/abdfaruk'>Github </a> profile. 
                </p>

                <p className='font-bold  text-2xl my-3'> Contact</p>
                <p>
                    If you want to hire me, need consultation, or want to hang out and chat, feel free to drop me a mail at <a className="font-bold text-yellow-600" href='abd.faruk.mern@gmail.com'>
                    abd.faruk.mern@gmail.com</a>

                  <p>  Thank you for reading!</p>
                </p>
            </div>
        </div>
    );
};

export default About;