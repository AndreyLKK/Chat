const express = require("express");
const app = express();
const PORT = 5000;

const http = require("http").Server(app);
const cors = require("cors");
const socketIo = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8080",
  },
});

app.get("api", (req, res) => {
  res.json({
    message: "Hello",
  });
});

let users = [];

let historyMessage = [];

socketIo.on("connection", (socket) => {
  console.log(`${socket.id} user connecting`);

  socket.on("user", (data) => {
    const userExists = users.some(
      (user) => user.id === data.id && user.name === data.name
    );

    if (!userExists) users.push(data);

    setTimeout(() => {
      socketIo.emit("responseUser", users);
    }, 2000);

    socket.on("removeUser", (data) => {
      users = users.filter((el) => el.id !== data.id);

      setTimeout(() => {
        socketIo.emit("updateUsers", users);
      }, 2000);
    });
  });

  socket.on("saveHistory", (data) => {
    historyMessage.push(data);
  });

  socket.on("getHistory", () => {
    socket.emit("getHistory", historyMessage);
  });

  socket.on("message", (data) => {
    socketIo.emit("response", data);
  });

  socket.on("userDisconnected", (data) => {
    console.log(`User disconnected: ${data.id}`);

    users.filter((el) => el.id === data.id);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnecting`);
  });
});

http.listen(PORT, () => {
  console.log("Server working");
});
