import DestinationCartDetails from "@/component/DestinationCartDetails";
import { cartDetails } from "@/lib/data";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const cartDetailsData = await cartDetails(id);
  console.log(cartDetailsData);
  return <div>
    <DestinationCartDetails cartDetailsData={cartDetailsData}></DestinationCartDetails>
  </div>;
};

export default page;
