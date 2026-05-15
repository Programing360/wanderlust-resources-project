export const destinationData = async () => {
  const data = await fetch("http://localhost:5000/destination");

  const res = await data.json();

  return res;
};

export const cartDetails = async (id) => {
  const data = await fetch(`http://localhost:5000/destination/${id}`);
  const res = await data.json();
  return res;
};


export const bookingData = async (userId) => {
  const data = await fetch(`http://localhost:5000/bookings/${userId}`);
  const res = await data.json();
  return res;
}