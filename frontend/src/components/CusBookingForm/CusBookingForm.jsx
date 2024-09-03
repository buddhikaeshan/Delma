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
        // Here you would typically send the data to a backend API
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="w-50 mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg" >
            <h2 className="caption " data-aos="fade-up" data-aos-anchor-placement="top-bottom">Delma Mount View Hotel</h2>
            <form onSubmit={handleSubmit} className="space-y-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
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
                        {bookingData.checkIn && (
                            <div className="absolute inset-y-0 left-0 right-0 flex items-center pointer-events-none">
                                <span className="text-gray-700 pl-2">{formatDate(bookingData.checkIn)}</span>
                            </div>
                        )}
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
                        {bookingData.checkOut && (
                            <div className="absolute inset-y-0 left-0 right-0 flex items-center pointer-events-none">
                                <span className="text-gray-700 pl-2">{formatDate(bookingData.checkOut)}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Number of Guests</label>
                    <div className="flex space-x-4">
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
                    <div className="flex space-x-4">
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
                    className="button w-100"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default CusBookingForm;