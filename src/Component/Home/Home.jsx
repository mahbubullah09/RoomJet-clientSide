import React from 'react';
import videoBanner from '../../assets/Roomjet.mp4'
import logo from '../../assets/RoomJet-2.png'

const Home = () => {
    return (
        <div  className='relative max-w-6xl mx-auto'>
        <div className='max-w-6xl mx-auto'>
        <video autoPlay="{true}" loop muted  className='fixed w-[1150px] -z-10 object-cover '>
                <source src={videoBanner}/>
            </video>
        </div>

        <div className='flex items-center justify-evenly mx-2 mt-6 md:mx-10 md:mt-16 lg:mx-20 lg:mt-36'>
           <div className='flex-1 '>
           <h3 className='text-white font-bold text-lg md:text-3xl lg:text-6xl'>Discover a World of Luxury and Comfort with RoomJet</h3>
           <div className=' lg:mt-8'>
           <button className= ' text-base font-semibold hover:bg-[#28844b] hover:text-black bg-[#ffcf00]  text-black  py-2 px-4 rounded-md hover:bg-blue-gray-800'>Book Now</button>
           </div>
           </div>
           <div className='flex-1'>
<img src={logo} alt="" />
           </div>
        </div>

            <div className='mt-[500px]'> 
            <div  className="bg-white p-4 sm:p-8">
              <div
                 className="font-inter text-2xl font-extrabold tracking-tight text-black">
                Majestic peaks, nature's embrace.
              </div>
              <div  className="mt-1 text-sm font-medium text-slate-500">
                Adventure calls, conquer mountain trails.
              </div>
              <p  className="mt-4 leading-7 text-slate-500">
                In the realm of towering mountains, where the air is crisp and
                the vistas stretch endlessly, one finds solace, exhilaration,
                and a profound connection with the untamed beauty of the natural
                world.
              </p>
              <p  className="mt-4 leading-7 text-slate-500">
                As the sun rises over the rugged peaks, casting a golden glow on
                the majestic landscape, a sense of awe fills the heart,
                reminding us of the grandeur and power that reside in the
                mountains.
              </p>
            </div>
                </div>
</div>
          
                
              
    );
};

export default Home;