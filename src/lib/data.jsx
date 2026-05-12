export const destinationData = async () => {
    const data = await fetch('http://localhost:5000/destination')
  
    const res = data.json();

    return res
    
}