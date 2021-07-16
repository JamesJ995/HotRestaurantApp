
const express = require('express');
const path = require('path');
const { getMaxListeners } = require('process');


// Sets up the Express App

const app = express();
const PORT = 3000;


const reservation = [
    {
        table: 1,
        name: 'Yoda',
        phoneNumber: 469-469-4690,
        Email: "yoda@gmail.com",
        uniqueId: ydacoolas151,
    },
    {
        table: 2,
        name: 'chicken',
        phoneNumber: 469-314-4500,
        Email: "chickenemail@gmail.com",
        uniqueId: chicken41,
    },
    {
        table: 3,
        name: 'monkey',
        phoneNumber: 469-220-4580,
        Email: "moneky@gmail.com",
        uniqueId: monkey51,
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
app.get('/tables', (req, res) => res.json(tables));
// Reservation POST
app.post("/api/reserve", (req, res) => {
    const newReservation = req.body;
    tables.push(newReservation);
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
