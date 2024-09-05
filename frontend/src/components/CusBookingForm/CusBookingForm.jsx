import React, { useState } from 'react';
import { Bed } from 'lucide-react';
import 'aos/dist/aos.css';
import './CusBookingForm.css'
import { useLocation } from 'react-router-dom';

const CusBookingForm = () => {

    const location = useLocation();
    const { startDate, endDate } = location.state || {};

    return (
        <div className="w-100 mx-auto mt-10 p-6 bg-white rounded-lg " >
            <h2 className="caption">Delma Mount View Hotel</h2>
            <form className="space-y-4 p-4 max-w-md mx-auto">
                <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium mb-1">Check-in Date</label>
                    <div className="relative">
                        <input
                            type="date"
                            name="checkIn"
                            id="checkIn"
                            className="w-full p-2 border rounded"
                            value={startDate}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium mb-1">Check-out Date</label>
                    <div className="relative">
                        <input
                            type="date"
                            name="checkOut"
                            id="checkOut"
                            className="w-full p-2 border rounded"
                            value={endDate}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Number of Guests</label>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <div className="flex-1">
                            <label htmlFor="adults" className="block text-xs mb-1">Adults</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                </div>
                                <input
                                    type="number"
                                    name="adults"
                                    id="adults"
                                    min="1"
                                    className="pl-10 w-full p-2 border rounded"
                                    value=""
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <label htmlFor="children" className="block text-xs mb-1">Children</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                </div>
                                <input
                                    type="number"
                                    name="children"
                                    id="children"
                                    min="0"
                                    className="pl-10 w-full p-2 border rounded"
                                    value=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Room Type</label>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="roomType"
                                    value=""
                                    checked=""
                                    className="mr-2"
                                />
                                <Bed className="h-4 w-4 mr-1" />
                            </label>
                    </div>
                </div>
                <button type="submit" className="button w-100 ">Book Now</button>
            </form>

        </div>
    );
};

export default CusBookingForm;