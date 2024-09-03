import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

const HotelBookingForm = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard'
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

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Hotel Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">Check-in Date</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="date"
              name="checkIn"
              id="checkIn"
              className="pl-10"
              value={bookingData.checkIn}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">Check-out Date</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="date"
              name="checkOut"
              id="checkOut"
              className="pl-10"
              value={bookingData.checkOut}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
          <Input
            type="number"
            name="guests"
            id="guests"
            min="1"
            value={bookingData.guests}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="roomType" className="block text-sm font-medium text-gray-700">Room Type</label>
          <Select
            name="roomType"
            id="roomType"
            value={bookingData.roomType}
            onChange={handleInputChange}
            required
          >
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
          </Select>
        </div>
        <Button type="submit" className="w-full">
          Book Now
        </Button>
      </form>
    </div>
  );
};

export default HotelBookingForm;
