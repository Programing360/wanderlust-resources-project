"use server";
import { revalidatePath } from "next/cache";
import { toast } from "react-toastify";

export async function UpdateFormData(id, formData) {
  const rawFormData = {
    title: formData.get("title"),
    country: formData.get("country"),
    category: formData.get("category"),
    price: formData.get("price"),
    duration: formData.get("duration"),
    date: formData.get("date"),
    image: formData.get("image"),
    description: formData.get("description"),
  };

  console.log("Updating ID:", id, "with data:", rawFormData);

  // এখানে আপনার ডাটাবেস আপডেট লজিক (fetch বা mongoose) লিখুন
   try{
            const response = await fetch(`http://localhost:5000/updateTravels/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rawFormData)
            });
            const result = await response.json();
            if(result){
                toast.success("Cart Updated Successfully:");
                // Optionally, you can add a success toast or redirect 
                redirect(`/cartDetails/${id}`); // Revalidate the cart details page to show updated data
                onOpenChange(); // Assuming you have a function to close the modal after update
            }
        } catch (error) {
            if(error.response){
                toast.error(`Error updating cart: ${error.response.data.message}`);
            }
        }

  revalidatePath(`/cartDetails/${id}`); // পেজ রিফ্রেশ করার জন্য
}