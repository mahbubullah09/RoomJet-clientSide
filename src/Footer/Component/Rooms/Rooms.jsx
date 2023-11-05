const Rooms = () => {
  return (
    <div>
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src="https://picsum.photos/200/200"
            alt="Image"
          />
          <div className="absolute top-0 right-0">
            <div className="w-32 h-8 absolute top-4 -right-8">
              <div className="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
                Booked
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Product Sale</h3>
        <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum
            auctor felis, vel consequat odio ullamcorper eu.
        </p>
        <div className="flex justify-between items-center mt-2">
            <p>Rating: 4.5/5.0</p>
            <p>Price: 600</p>
        </div>
       <div className="grid place-items-center">
        
        <button className=" text-base font-semibold my-4 bg-[#ffcf00]  text-black  py-2 px-4 rounded-md hover:bg-blue-gray-800">
              Book Now
            </button>
       </div>
    </div>
      
      </div>
    </div>
  );
};

export default Rooms;
