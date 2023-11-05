import emailLogo from '../../../assets/email.png'

const Newsletter = () => {
    return (
        <div className="text-center max-w-4xl mx-auto relative ">
            <div className="bg-slate-700 py-16 rounded-lg space-y-4 ">
                <h1 className="text-[#ffcf00] font-semibold text-4xl">  Join Our Newsletter</h1>
                <h2 className="text-white">Stay up to data with our letest news,deal and offer</h2>
                <div className="space-x-2 ">
                    <input className="rounded h-10 w-1/2 p-2" type="email" placeholder='Your Email' />
                    <button className="bg-[#ffcf00] py-2 px-4 text-base font-semibold rounded" >Subscribe</button>
                </div>
                <h2 className="text-gray-400">Your email is safe with us, We don't spam</h2>
            </div>

            <div className='text-center '>
                <img className=' w-1/4 md:w-1/6 absolute -top-8 md:-top-12  right-1/3 md:right-[310px] lg:right-[350px] ' src={emailLogo} alt="" />
            </div>
        </div>
    );
};

export default Newsletter;