import { io } from "socket.io-client";

let socket = null;

export function createConnection() {
  if (!socket) {
    socket = io("http://localhost:5000");
  }
  return socket;
}

export function disconnect() {
  this.socket.on("disconnect", () => {
    console.log("Соединение с WebSocket закрыто");
  });
}

export function createUser(name) {
  const user = {
    name: name,
  };
  socket.emit("user", user);
}

export function responseUser(callback) {
  socket.on("responseUser", (usersList) => {
    console.log(usersList);

    callback(usersList);
  });
}

export function readyClient() {
  socket.emit("ready");
}

export function removeUser(email) {
  socket.emit("removeUser", { name: email });
}

export function updateUsers(callback) {
  socket.on("updateUsers", (usersList) => {
    callback(usersList);
  });
}

export function createMessage(name, message) {
  const msg = {
    name,
    message,
  };

  socket.emit("message", msg);
}

export function responseMessage(callback) {
  socket.on("responseMessage", (data) => {
    callback(data);
  });
}

export function saveHistoryMsg(name, message) {
  const msg = {
    name,
    message,
  };
  socket.emit("saveHistory", msg);
}

export function eventGetHistory() {
  socket.emit("getHistory");
}

export function getHistoryMsg(callbalck) {
  socket.on("sendHistory", (data) => {
    callbalck(data);
  });
}
