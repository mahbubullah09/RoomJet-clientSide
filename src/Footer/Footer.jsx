
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
    <footer className="footer footer-center  bg-cyan-900 text-primary-content ">
        <div className="flex pt-20   ">
            <img className="bg-white py-2 px-4 rounded-full" src="https://i.ibb.co/P1LkfSj/Room-Jet-2.png" />
            
        </div>
        <div className="pt-0 pb-0">
            <ul tabIndex="0" className="text-white gap-8  flex flex-wrap justify-center  md:grid-cols-6 gap-5     ">
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/about'} >About Us</Link></li>
                <li><Link to={'/faq'} >FAQ</Link></li>
              
                <li><Link to={'/rooms'} >Rooms</Link></li>
                <li><Link to={'/mybookings'} >My Bookings</Link></li>

            </ul>
        </div>
        <div>
            <div className=" text-white pb-10 text-3xl flex flex-wrap justify-center gap-6 md:grid-cols-6   ">
              
                <FaTwitter></FaTwitter>
                <FaYoutube></FaYoutube>
                <FaFacebook></FaFacebook>
                <FaLinkedin></FaLinkedin>
                <FaInstagram></FaInstagram>

               
            </div>
        </div>
    </footer>
            
        </div>
    );
};

export default Footer;