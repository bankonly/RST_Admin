const socketIo = require("socket.io");

let io;

exports.InitSocket = (server, channel = "connection", msg = "Socket is connected") => {
  io = socketIo(server);
  io.on(channel, (socket) => {
    socket.on('SEND_MESSAGE', (data) => {
      io.emit('MESSAGE', data)
    });
  });
  return io;
};

exports.Io = () => {
  if (!io) throw new Error("uninitialized socket");
  return io;
};
