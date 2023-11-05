
import videoBanner from '../../../assets/Roomjet.mp4'
import logo from "../../../assets/RoomJet-2.png";
import Deal from "./Deal";

const Home = () => {
  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto">
        <video
          autoPlay="{true}"
          loop
          muted
          className="fixed w-[1150px] -z-10 object-cover "
        >
          <source src={videoBanner} />
        </video>
      </div>

      <div className="flex items-center justify-evenly mx-2 mt-6 md:mx-10 md:mt-16 lg:mx-20 lg:mt-36">
        <div className="flex-1 ">
          <h3 className="text-white font-bold text-lg md:text-3xl lg:text-6xl">
            Discover a World of Luxury and Comfort with RoomJet
          </h3>
          <div className=" lg:mt-8">
            <button className=" text-base font-semibold hover:bg-[#28844b] hover:text-black bg-[#ffcf00]  text-black  py-2 px-4 rounded-md hover:bg-blue-gray-800">
              Book Now
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
     
      </div>

<div className='mt-40'>
<Deal/>
</div>

      
    </div>
  );
};

export default Home;
