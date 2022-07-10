import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl text-[#B6B6B4] font-bold inline border-b-4 border-[#31906E]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='text-[#BCC6CC] max-w-[700px]'>Hi. I'm Arya,Please take a look around.</p>
            </div>
            <div>
            <p className='text-[#98AFC7] py-2 max-w-[700px]'>
              I am passionate about building excellent Websites that improves
              the lives of those around me. I specialize in creating websites
              for my personal projects and I am also having some ideas of startups.What would you do if you had
              a full stack Web dev expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;