import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-white to-blue-40 px-6 py-12 text-gray-800">
      <div className='flex max-w-full px-10'>
        <div className=' w-2/5'>
          <img src="https://blog.lostandfound.io/assets/images/the-etiquette-of-finding-and-returning-lost-items.webp" alt="showing humanity" className='rounded-2xl m-2'/>
        </div>
        <div className='w-3/5  px-14'>
          <h2 className='text-3xl font-bold text-[#065C77] my-2' >Aim</h2>
          <p className='text-lg'>Anveshan is a campus-centric lost and found platform designed to help students and staff reconnect with misplaced belongings in a streamlined, secure, and intuitive way. Built with a deep understanding of everyday campus life, Anveshan transforms the often chaotic process of recovering lost items into a structured and accessible experience.
        </p></div>
      </div>
      <div className='flex max-w-full  my-10 pr-10'>
        <div className='w-3/5  px-14'>
          <h2 className='text-3xl font-bold text-[#065C77] my-2' >Purpose</h2>
          <p className='text-lg'>The primary goal of Anveshan is to foster a culture of care and accountability within the college community. By providing a centralized digital space for reporting, discovering, and claiming lost items, it reduces friction, prevents miscommunication, and encourages responsible behavior. Whether it's a lost ID card, a forgotten notebook, or a found pair of headphones, Anveshan ensures that every item has a path back to its rightful owner.
        </p></div>
        <div className=' w-2/5'>
          <img src="https://pbs.twimg.com/media/DL8v5LwU8AAgQ6Z.jpg" alt="showing humanity" className='rounded-2xl m-2'/>
        </div>
        
      </div>
    </div>
  );
}