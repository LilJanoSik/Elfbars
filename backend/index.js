
const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");


const cors = require("cors");
const app = express();
const PORT = 3000;

const elfbarRouter = require("./routes/elfbar")

mongoose.connect(
    `mongodb+srv://admin:admin@cluster0.cihw1.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/elfbar", elfbarRouter);


app.listen(PORT, () => console.log(`App is running on ${PORT}`));