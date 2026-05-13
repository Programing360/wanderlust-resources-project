'use client'
import React from 'react';

import { Trash2, Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from '@heroui/react';
import { redirect, useRouter } from 'next/navigation';

const AddTravelPackage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const router = useRouter()

   const onSubmit = async (data) => {
    try {
       

        const addTravels = await fetch('http://localhost:5000/addTravels', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await addTravels.json();

        if(result){
            toast.success("Travel Package Added");
            router.push('/')
        }

    } catch (error) {
        console.log(error);
    }
};

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Title matches the screenshot style */}
                <h1 className="text-4xl font-light text-gray-800 mb-2">Add New Travel Package</h1>
                <div className="w-12 h-1 bg-purple-400 mb-10"></div>

                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-6"
                >
                    {/* Destination Name */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700">Destination Name</label>
                        <input
                            {...register("title", { required: "Destination name is required" })}
                            placeholder="Bali Paradise"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                    </div>

                    {/* Country & Category Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700">Country</label>
                            <input
                                {...register("country", { required: "Country is required" })}
                                placeholder="Indonesia"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700">Category</label>
                            <select
                                {...register("category")}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none appearance-none"
                            >
                                <option value="Beach">Beach</option>
                                <option value="Mountain">Mountain</option>
                                <option value="City">City</option>
                                <option value="Desert">Desert</option>
                            </select>
                        </div>
                    </div>

                    {/* Price & Duration Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700">Price (USD)</label>
                            <input
                                type="number"
                                {...register("price", { required: "Price is required" })}
                                placeholder="e.g., 1299"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700">Duration</label>
                            <input
                                {...register("duration", { required: "Duration is required" })}
                                placeholder="e.g., 7 Days/6 Nights"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                            />
                        </div>
                    </div>

                    {/* Departure Date */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700">Departure Date</label>
                        <input
                            type="date"
                            {...register("date", { required: "Date is required" })}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none text-gray-500"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700">Image URL</label>
                        <input
                            {...register("image", { required: "Image URL is required" })}
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700">Description</label>
                        <textarea
                            {...register("description")}
                            rows="5"
                            placeholder="Describe the travel experience..."
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* Buttons Section - Matches screenshot alignment */}
                    <div className="flex flex-col sm:flex-row justify-end items-center gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => reset()}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors font-medium"
                        >
                            <Trash2 size={18} />
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-md hover:bg-[#138496] transition-colors font-medium"
                        >
                            <Save size={18} />
                            Add Travel Package
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTravelPackage;