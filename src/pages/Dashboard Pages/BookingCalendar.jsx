import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from '@fullcalendar/timegrid';

function BookingCalendar() {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="flex-grow-1 p-4">
        <h2>Booking</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div style={{ width: "175vh", height: "90vh", overflow: "auto" }}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin]} 
              initialView="timeGridWeek"
              weekends={true}
              events={[
                { title: 'Event 1', date: '2024-09-01' },
                { title: 'Event 2', date: '2024-09-02' },
              ]}
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingCalendar