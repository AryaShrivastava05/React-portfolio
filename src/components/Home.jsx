import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
          
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#00A36C]'>Hi, my name</p>
                <h1 className='text-2xl sm:text-4xl font-bold py-2 text-[#50C878]'>Arya Shrivastava</h1>
                <h2 className='text-2xl sm:text-2xl font-bold py-4 text-[#31906E]'>I'm a Full Stack Web Developer</h2>
                <p className='text-[#98AFC7] py-4 max-w-[700px]'>
                    I am an enthusiastic girl, with a zeal to always complete
                    the task assigned to me, I am an expert in various skills
                    like app development, and I am learning new technologies .
                    I am a girl who is an altruist and an extrovert girl.
                    I like to hone my leadership skills and also gain a lot of
                    experience and exposure by working for such an esteemed organization.
                    I am a girl who wants to fulfill my dreams and aspirations and make my
                    resume stand out of the crowd.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#306754] hover:border-[#306754]'>View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home