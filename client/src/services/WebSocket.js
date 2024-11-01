export class CustomWebSocket {
  constructor(socket, usersRef) {
    this.socket = socket;
    this.usersRef = usersRef;
  }

  createUser(name) {
    const user = {
      name: name,
      id: this.socket.id,
    };
    this.socket.emit("user", user);
  }

  init() {
    this.socket.on("responseUser", this.updateUsersList.bind(this));
    this.socket.on("updateUsers", this.updateUsersList.bind(this));
  }

  updateUsersList(data) {
    this.usersRef.value = data;
  }

  buildMessage(name, message) {
    return {
      name: name,
      text: message,
      id: this.socket.id,
      socketID: this.socket.id,
    };
  }

  createMessage(name, message) {
    const msg = this.buildMessage(name, message);
    this.socket.emit("message", msg);
  }

  saveHistoryMsg(name, message) {
    const msg = this.buildMessage(name, message);
    this.socket.emit("saveHistory", msg);
  }

  eventGetHistory() {
    this.socket.emit("getHistory");
  }

  getHistory(callbalck) {
    this.socket.on("getHistory", callbalck);
  }
}
