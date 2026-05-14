import Banner from "@/component/Banner";
import DestinationCard from "@/component/Destination";
import Navbar from "@/component/Navbar";
import ReadyToStart from "@/component/ReadyToStart";
import Testimonials from "@/component/Testimonials";
import WhyChooseUs from "@/component/WanderlustSupport";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <DestinationCard></DestinationCard>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <ReadyToStart></ReadyToStart>
    </div>
  );
}
