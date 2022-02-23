const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const path = require('path');
const cors = require('cors');

var corOption = {
    origin: 'http://localhost:4000'
}

app.set("view engine", "ejs")
app.set("views", "views")

app.use(cors(corOption));
app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mainrouter = require('./routes/index.js')
app.use(mainrouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})