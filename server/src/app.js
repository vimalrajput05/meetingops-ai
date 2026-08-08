const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.get("/", (req,res)=>{
    res.json({
        message: "MeetingOps AI API is running"
    });
});

module.exports = app;