import { bookingData } from "@/lib/data";
import { toast } from "react-toastify";

export const destinationDataById = async (data, userId) => {
   if (!userId) {
    toast.error("Please login to book this destination");
    return;
  }
  console.log(data)
  if (userId) {
    const bookingInfo = await bookingData(userId);
    console.log(bookingInfo);
    const alreadyBooked = bookingInfo.some(
      (booking) => booking.data._id === data._id,
    );
    if (alreadyBooked) {
      toast.error("You have already booked this destination");
      return;
    }
  }

  const userData = {
    data,
    userId,
  };
  const res = await fetch("http://localhost:5000/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const result = await res.json();
  if (result.insertedId) {
    toast.success("Destination added to bookings");
  }
};
