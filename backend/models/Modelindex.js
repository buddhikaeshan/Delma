const Room = require('./Room');
const Booking = require('./Booking');
const Customer = require('./Customer');
const RoomsHasBookings = require('./RoomsHasBookings');

// Customer has many Bookings
Customer.hasMany(Booking, { foreignKey: 'customers_customersId' });
Booking.belongsTo(Customer, { foreignKey: 'customers_customersId' });

// Many-to-many relation between Rooms and Bookings
Room.belongsToMany(Booking, { through: RoomsHasBookings, foreignKey: 'rooms_roomId' });
Booking.belongsToMany(Room, { through: RoomsHasBookings, foreignKey: 'bookings_bookingId' });
