import MyBookingClient from "@/component/MyBookingClient";
import { bookingData } from "@/lib/data";
 // নিচে তৈরি করা ক্লায়েন্ট কম্পোনেন্টটি

const MyBookingPage = async () => {
  const booking = await bookingData();

  return <MyBookingClient booking={booking} />;
};

export default MyBookingPage;