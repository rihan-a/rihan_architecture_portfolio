const express = require("express");
const cors = require("cors");
const Replicate = require("replicate");
const dotenv = require("dotenv");
const { Readable } = require("stream");
const { Buffer } = require("buffer");

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;


app.use(cors());
app.use(express.json());

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
