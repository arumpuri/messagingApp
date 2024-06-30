const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js")
const connectDB =require("./config/db.js")
const userRoutes = require("./routes/userRoutes.js")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB()
const app = express();

app.use(express.json()) // accepting json data from frontend

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("API is running")
});
app.use("/api/user", userRoutes)

app.get("/api/chat", (req, res) => {
    res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat)
});

const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () =>
//     console.log(`listening on port ${PORT}`)
//   );

  app.listen(5000, () =>
    console.log(`listening on port ${5000}`)
  );