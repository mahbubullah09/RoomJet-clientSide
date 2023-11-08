import { Helmet } from "react-helmet-async";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <div>
        <Helmet>
        <title>RoomJet-About</title>
        </Helmet>
        <h1 className="text-center pl-8 pr-8 text-3xl md:text-4xl font-bold">
          Our <span className="text-[#28844b]">History</span>
        </h1>

        <div className="mx-auto text-center md:max-w-xl lg:max-w-4xl  bg-slate-700  p-2 mb-4 rounded my-4">
          <p className="my-8 pb-2 md:mb-12 md:pb-0 text-white">
            Established in 2005, RoomJet has evolved from a single property to a
            renowned name in hospitality. We offer luxury stays, personalized
            service, and a commitment to sustainability. Our history reflects a
            journey of growth and excellence, providing unforgettable
            experiences for travelers worldwide.
          </p>
        </div>

        <div className="">
          <h1 className="text-center pl-8 pr-8 text-3xl md:text-4xl font-bold">
            Our <span className="text-[#28844b]">Mission</span>
          </h1>
          <div className="mx-auto text-center md:max-w-xl lg:max-w-4xl  bg-slate-700  p-2  rounded my-4">
            <h3 className="mb-6 text-xl font-bold text-[#ffcf00]">
              Exceptional Experience
            </h3>

            <p className="my-8 pb-2 md:mb-12 md:pb-0 text-white">
              Our mission is to provide every guest with an exceptional and
              unforgettable hospitality experience.
            </p>
          </div>

          <div className="mx-auto text-center md:max-w-xl lg:max-w-4xl  bg-slate-700  p-2  rounded my-4">
            <h3 className="mb-6 text-xl font-bold text-[#ffcf00]">
              Luxury Accommodations
            </h3>

            <p className="my-8 pb-2 md:mb-12 md:pb-0 text-white">
              We are dedicated to offering luxurious and comfortable
              accommodations that cater to the needs and desires of our guests.
            </p>
          </div>

          <div className="mx-auto text-center md:max-w-xl lg:max-w-4xl  bg-slate-700  p-2  rounded my-4">
            <h3 className="mb-6 text-xl font-bold text-[#ffcf00]">
              Impeccable Service
            </h3>

            <p className="my-8 pb-2 md:mb-12 md:pb-0 text-white">
              We strive to deliver impeccable and personalized service that goes
              above and beyond to meet our guests' expectations.
            </p>
          </div>

          <div className="mx-auto text-center md:max-w-xl lg:max-w-4xl  bg-slate-700  p-2  rounded my-4">
            <h3 className="mb-6 text-xl font-bold text-[#ffcf00]">
              Eco-Friendly Practices
            </h3>

            <p className="my-8 pb-2 md:mb-12 md:pb-0 text-white">
              We are committed to implementing eco-friendly practices to reduce
              our environmental footprint and contribute to a sustainable
              future.
            </p>
          </div>
        </div>

        <h1 className="text-center pl-8 pr-8 text-3xl md:text-4xl font-bold">
          Our <span className="text-[#28844b]">Vision</span>
        </h1>

        <div className="mx-auto text-center md:max-w-xl lg:max-w-4xl  bg-slate-700  p-2 mb-4 rounded my-4">
          <p className="my-8 pb-2 md:mb-12 md:pb-0 text-white">
            RoomJet's vision is to become a global leader in the hospitality
            industry by continually raising the bar on what guests can expect
            from their stays. We aspire to create a network of eco-friendly,
            luxurious, and memorable accommodations that are synonymous with
            excellence, where every traveler feels valued and inspired. Our
            vision is to set new standards for the perfect blend of comfort,
            sustainability, and hospitality in destinations around the world.
          </p>
        </div>

        <div className="">
          <h1 className="text-center pl-8 pr-8 text-3xl md:text-4xl font-bold">
            Meet Our <span className="text-[#28844b]">Super Team</span>
          </h1>
          <p className="text-center max-w-3xl mx-auto mt-4 px-8 text-base ">
            At RoomJet, we take immense pride in our exceptional team, each
            member of which plays a crucial role in ensuring your stay is
            nothing short of extraordinary. Our dedicated staff is committed to
            making your experience seamless, comfortable, and memorable. Let us
            introduce you to our super team
          </p>
        </div>
        <div className=" lg:max-w-4xl h-fit mx-auto bg-[url('https://i.ibb.co/0ynrJPR/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg')]  text-white ">
          <div className="bg-[#313030b3]  pt-8 pb-8 my-10  ">
            <div className="grid  md:grid-cols-2  lg:grid-cols-4">
              <div className="card  ">
                <figure className="px-10 pt-10">
                  <img
                    src="https://i.ibb.co/t3F1WHy/mahbub-2.png"
                    alt="Shoes"
                    className="rounded-xl w-28"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Mahbubullah</h2>
                  <p>CEO</p>
                  <div className="grid grid-flow-col gap-4">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                  </div>
                </div>
              </div>
              <div className="card  ">
                <figure className="px-10 pt-10">
                  <img
                    src="https://i.ibb.co/CHWTRr7/301417030-1986425748414662-4437542033985868981-n-fotor-2023102451048.png"
                    alt="Shoes"
                    className="rounded-xl w-28"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Emon</h2>
                  <p>Managing Director</p>
                  <div className="grid grid-flow-col gap-4">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                  </div>
                </div>
              </div>
              <div className="card   ">
                <figure className="px-10 pt-10">
                  <img
                    src="https://i.ibb.co/Hxkyhs7/379675081-624793729843878-7058128983212561433-n-fotor-2023102451220.png"
                    alt="Shoes"
                    className="rounded-xl w-28"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Abu Taief Siddik</h2>
                  <p>Social media Expert</p>
                  <div className="grid grid-flow-col gap-4">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                  </div>
                </div>
              </div>

              <div className="card  ">
                <figure className="px-10 pt-10">
                  <img
                    src="https://i.ibb.co/Mktd5Td/340258180-1524987371359455-2552699208933899964-n-fotor-202310245120.png"
                    alt="Shoes"
                    className="rounded-xl w-28"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Shopon</h2>
                  <p>Social media Expert</p>
                  <div className="grid grid-flow-col gap-4">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
