const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use("/api/v1/test", require("./routes/testRouter")) ;
app.use("/api/v1/auth", require("./routes/authRouter"));
app.use("/api/v1/inventory", require("./routes/inventoryRouter"));

//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, () => {
    console.log(
        `Server Running In ${process.env.DEV_MODE} Mode On ${process.env.PORT}`.bgBlue.white
    );
})