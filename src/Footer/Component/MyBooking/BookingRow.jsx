import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookingRow = ({ bookings,handleDelete ,handleUpdate}) => {
  console.log(bookings);

  const {
    room_name,
       image,
    date,
    _id,
    
room_id
   } = bookings;

   const time = moment(date, "YYYYMMDD").fromNow();
   console.log(time);


   //compare booking date

   const[possible,SetPossible] = useState(false)
   useEffect(() =>{
    if((time.startsWith('in') && time.endsWith('day')) || (time.startsWith('in') && time.endsWith('days'))){
      SetPossible(true);
      }
   
   },[time])
   console.log(possible);




  return (
    <tr>
      
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar flex flex-col text-center">
            <div className="mask rounded-xl w-16 md:w-24  ">
              <img src={image} alt="Avatar Tailwind CSS Component" />
             
            </div>
            {room_name}
          </div>
          
        </div>
      </td>
      
      <td>{date}</td>
      <th className="flex flex-col gap-2">
       
       <Link to={`/updateBookings/${_id}`}>
       <button  className="w-24 bg-[#FF3811] py-2 px-4 rounded text-white">Update</button>
       </Link>
     
       {
        possible?
        <button onClick={() => handleDelete(_id)} className="w-24 bg-[#FF3811] py-2 px-4 rounded text-white">Cancel</button>
        :
        <button disabled className="w-24 bg-[#24110d] py-2 px-4 rounded text-white">Can't Cancel</button>
       }
      </th>
    </tr>
  );
};

export default BookingRow;
