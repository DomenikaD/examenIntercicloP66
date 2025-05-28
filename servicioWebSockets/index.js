const WebSocket = require('ws');

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });

console.log(`Servidor WebSocket activo en ws://localhost:${PORT}`);

wss.on('connection', (ws) => {
  console.log('Cliente Conectado');

  const interval = setInterval(() => {
    ws.send(JSON.stringify({ message: "°°° Hola desde WebSocket °°°" }));
  }, 1000);

  ws.on('close', () => {
    console.log('Cliente Desconectado');
    clearInterval(interval);
  });
});
