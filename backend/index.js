const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js")

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is running")
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat)
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, console.log(`server starting on PORT ${PORT}`));