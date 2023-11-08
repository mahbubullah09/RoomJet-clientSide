import moment from "moment";
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


  console.log(status,bookings);


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
     
        <button onClick={() => handleDelete(_id)} className="w-24 bg-[#FF3811] py-2 px-4 rounded text-white">Delete</button>
      </th>
    </tr>
  );
};

export default BookingRow;
