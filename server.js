const express = require("express");
const path = require("path");
const { getMaxListeners } = require("process");

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
  {
    table: 1,
    name: "Jeff",
    phoneNumber: "555-123-4567",
    email: "test@email.com",
    uniqueId: "Jeff's Party",
  },
  {
    table: 2,
    name: "Chicken",
    phoneNumber: "555-987-6541",
    email: "chicken@email.com",
    uniqueId: "Chicken's Party",
  },
  {
    table: 3,
    name: "Monkey",
    phoneNumber: "469 - 220 - 4580",
    email: "moneky@email.com",
    uniqueId: "Monkey's Party",
  },
];

const waitList = [
  {
    table: "N/A",
    name: "Frog",
    phoneNumber: "555-753-1564",
    email: "frog@email.com",
    uniqueId: "Frog's Party",
  },
];

// Routes for displaying html pages:

// Homepage route
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "home.html")));
// Tables route
app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "tables.html"))
);
// Reservations route
app.get("/reserve", (req, res) =>
  res.sendFile(path.join(__dirname, "reserve.html"))
);

// Gets and posts for table data

// Tables GET
app.get("/api/tables", (req, res) => res.json(reservations));
// Tables GET
app.get("/api/waitlist", (req, res) => res.json(waitList));
// Reservations GET
app.get("/api/reserve", (req, res) => res.json(reserveForm));
// Reservation POST
app.post("/api/reserve", (req, res) => {
  const newReservation = req.body;

  if (reservations.length >4){
      waitList.push(newReservation);
        
  }else {
  reservations.push(newReservation);
  }
  res.json(newReservation);
  console.log(reservations);
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

