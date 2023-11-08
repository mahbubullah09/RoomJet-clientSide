import logo from "../assets/RoomJet logo.png"

const Footer = () => {
    return (
        <footer className="footer px-20 md:px-0 py-10 bg-black text-white">
        <div className="flex flex-col items-center">
          <img className=" w-1/2" src={logo} alt="" />
          <div className=" text-center">
          <p>RoomJet</p>
          <p>Providing service since 1992</p>
          </div>
        </div> 
        <nav>
          <header className="footer-title">About</header> 
          <a className="link link-hover">Home</a> 
          <a className="link link-hover">Service</a> 
          <a className="link link-hover">Contact</a> 
          
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">Why RoomJet</a> 
          <a className="link link-hover">About</a> 
          
        </nav> 
        <nav>
          <header className="footer-title">Support</header> 
          <a className="link link-hover">Support Center</a> 
          <a className="link link-hover">Feedback</a> 
          <a className="link link-hover">Accesbility</a>
        </nav>
      </footer>
    );
};

export default Footer;