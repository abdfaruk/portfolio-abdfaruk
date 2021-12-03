import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import image from '../../img/abdullah.png';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto '>
                <div>
                    <div className='flex justify-center items-center mt-20 mb-10'>
                        <img className='rounded-full h-43 w-64' src={image} alt="" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000" />
                    </div>
                    <div className='text-center my-5'>
                        <h2 className='font-bold text-3xl '>Abdulah Al Faruk</h2>
                        <h2 className='font-semibold text-1xl '><span style={{ color: 'black',}}>
                        <Typewriter
                            words={['MERN Stack Web Developer']}
                            loop={10}
                            cursor
                            cursorStyle='❤'
                            typeSpeed={200}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                        </span></h2>
                    </div>

                    <div className='text-center space-x-3'>
                        <a className='text-4xl ' href="https://www.linkedin.com/in/abdullah-al-faruk-0a857b209/">
                        <FontAwesomeIcon  icon={faLinkedin} />
                        </a>
                        <a className='text-4xl ' href="https://stackoverflow.com/users/17236179/abdullah-al-faruk">       <FontAwesomeIcon  icon={faStackOverflow} /> </a>
                        <a className='text-4xl ' href="https://github.com/abdfaruk"> <FontAwesomeIcon  icon={faGithub} /> </a>
                    </div>
                    <div className='text-center space-x-5 my-5'>
                        <a className='' href="https://drive.google.com/file/d/1ZEr8FCpbNaT_ED99zAj8GA69JpebKvJp/view?usp=sharing"> View Resume</a>

                        <a href="abd.pdf" download> Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;