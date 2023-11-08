import { useContext, useEffect, useState } from "react";

import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../Provider/authProvider";
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  const url = `https://roomjet-server-side.vercel.app/booked/email?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roomjet-server-side.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bookings.filter(
                (bookings) => bookings._id !== id
              );

              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    console.log(id);
    fetch(`https://roomjet-server-side.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((bookings) => bookings._id !== id);

          const updated = bookings.find((bookings) => bookings._id !== id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>RoomJet-My Bookings</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>

              <th>Booking Date</th>
              <th>Update/Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {bookings.map((bookings) => (
              <BookingRow
                key={bookings._id}
                bookings={bookings}
                handleDelete={handleDelete}
                handleStatus={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
