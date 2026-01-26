// faye-server.js
import http from 'http';
import faye from 'faye';

const server = http.createServer();
const bayeux = new faye.NodeAdapter({ mount: '/faye', timeout: 45 });

// Adiciona extensão para logging
bayeux.on('handshake', function (clientId) {
  console.log('Cliente conectado:', clientId);
});

bayeux.on('disconnect', function (clientId) {
  console.log('Cliente desconectado:', clientId);
});

bayeux.attach(server);

// Adiciona headers CORS para permitir conexões do frontend
server.on('request', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
});

const PORT = process.env.PORT || 8001;
server.listen(PORT, () => {
  console.log(`Faye server rodando em http://localhost:${PORT}/faye`);
});
