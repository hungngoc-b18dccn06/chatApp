const express = require("express");
const dotenv = require("dotenv")
const app = express();
const PORT = process.env.PORT || 4000;
app.get("/", (rep, res) => {
    res.send("chay thu cho 111")
})
app.listen(PORT, () => console.log(`erver on running on 5000 ${PORT}`));

    