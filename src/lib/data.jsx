export const destinationData = async () => {
  const data = await fetch("http://localhost:5000/destination");

  const res = await data.json();

  return res;
};

export const cartDetails = async (id) => {
    console.log(id);
  const data = await fetch(`http://localhost:5000/destination/${id}`);
  const res = data.json();
  return res;
};
