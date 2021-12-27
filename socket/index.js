const io = require("socket.io")(8900, {
  cors: {
    origin: `http://localhost:3000`,
  },
});
io.on(`connection`, (socket) => {
  console.log("user has been connected");
  io.emit("welcome", "hello this is socket server");
});
