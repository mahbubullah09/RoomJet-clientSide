import deal from '../../../assets/deal.png';

const Deal = () => {
    console.log('jdhfdf');
    return (
        <div className=' bg-orange-100'>
            <div className='py-16  px-8 flex items-center '>
            <div className='flex-1'>
                <img src={deal} alt="" />
            </div>
            <div className='flex-1 '>
              <h3 className='text-6xl font-bold '>Trip with family and get special surprise gift</h3>
              <p className='bg-[#ffcf00] py-3 px-4 w-56 text-lg font-bold rounded-bl-full rounded-tr-full mt-4'>Find Your Room Now</p>
            </div>
            </div>
            
        </div>
    );
};

export default Deal;