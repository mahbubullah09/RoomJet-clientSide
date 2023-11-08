import { Helmet } from "react-helmet-async";

const Faq = () => {
  return (
    <div>
        <Helmet>
        <title>RoomJet-FAQ</title>
        </Helmet>
      <div className="faq-cont flex flex-col-reverse gap-8 my-8 lg:flex lg:flex-row justify-between items-center">
        <div className="left-cont md:w-1/2">
          <div
            tabindex="0"
            className="my-4 text-black collapse collapse-plus border border-base-300 bg-[#a4f1a8]"
          >
            <div className="collapse-title text-xl font-medium">
              Is RoomJet Hotel a trusted place to stay
            </div>
            <div className="collapse-content">
              <p>
                RoomJet Hotel is committed to delivering exceptional guest
                experiences. We uphold high standards of cleanliness,
                hospitality, and service, ensuring that your stay is enjoyable
                and worry-free.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            className="my-4 text-black collapse collapse-plus border border-base-300 bg-[#a4f1a8]"
          >
            <div className="collapse-title text-xl font-medium">
              What amenities and services does RoomJet Hotel offer?
            </div>
            <div className="collapse-content">
              <p>
                RoomJet Hotel provides a range of amenities and services,
                including complimentary breakfast, free Wi-Fi, room service, and
                more. You can find specific details on our website or by
                contacting us directly.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            className="my-4 text-black collapse collapse-plus border border-base-300 bg-[#a4f1a8]"
          >
            <div className="collapse-title text-xl font-medium">
              Can I modify or cancel my RoomJet Hotel reservation?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can modify or cancel your reservation in accordance
                with our cancellation policy. Review the specific terms on your
                booking confirmation or contact our customer support for
                assistance.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            className="my-4 text-black collapse collapse-plus border border-base-300 bg-[#a4f1a8]"
          >
            <div className="collapse-title text-xl font-medium">
              Is my personal information safe when I book with RoomJet Hotel?
            </div>
            <div className="collapse-content">
              <p>
                Your privacy and data security are a top priority for us.
                RoomJet Hotel uses secure, encrypted connections and follows
                industry best practices to protect your information.
              </p>
            </div>
          </div>
        </div>

        <div className="right-cont">
          <img src="https://i.ibb.co/1zbr0gJ/faq.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
