import React, { useState } from 'react';
import { Calendar, Users, Bed } from 'lucide-react';
import 'aos/dist/aos.css';
import './CusBookingForm.css'

const CusBookingForm = () => {
    const [bookingData, setBookingData] = useState({
        checkIn: '',
        checkOut: '',
        adults: 1,
        children: 0,
        roomType: 'single'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking data:', bookingData);
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="w-50 mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg" >
            <h2 className="caption text-center text-lg font-semibold mb-4">Delma Mount View Hotel</h2>
            <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
                <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium mb-1">Check-in Date</label>
                    <div className="relative">
                        <input
                            type="date"
                            name="checkIn"
                            id="checkIn"
                            className="w-full p-2 border rounded"
                            value={bookingData.checkIn}
                            onChange={handleInputChange}
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
                            value={bookingData.checkOut}
                            onChange={handleInputChange}
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
                                    <Users className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    type="number"
                                    name="adults"
                                    id="adults"
                                    min="1"
                                    className="pl-10 w-full p-2 border rounded"
                                    value={bookingData.adults}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <label htmlFor="children" className="block text-xs mb-1">Children</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Users className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    type="number"
                                    name="children"
                                    id="children"
                                    min="0"
                                    className="pl-10 w-full p-2 border rounded"
                                    value={bookingData.children}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Room Type</label>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                        {['single', 'double', 'triple'].map((type) => (
                            <label key={type} className="flex items-center">
                                <input
                                    type="radio"
                                    name="roomType"
                                    value={type}
                                    checked={bookingData.roomType === type}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                <Bed className="h-4 w-4 mr-1" />
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </label>
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="button w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Book Now
                </button>
            </form>

        </div>
    );
};

export default CusBookingForm;