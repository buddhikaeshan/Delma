import React, { useState, useEffect } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import config from '../../config';

function BookingCalendar() {
  const events = [
    {
      title: 'Single Day Event',
      start: '2024-09-01', 
      end: '2024-09-01',   
    },
    {
      title: 'Multi-Day Event',
      start: '2024-09-02', 
      end: '2024-09-05',   
    }
  ];

  return (
    <div className="d-flex">
      <SideBar />
      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Booking Calendar</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div style={{ width: '175vh', height: '85vh', overflow: 'auto' }}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              events={events}
              editable={true}
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCalendar;
