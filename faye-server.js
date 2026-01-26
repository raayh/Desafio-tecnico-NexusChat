// faye-server.js
import http from 'http';
import faye from 'faye';

const bayeux = new faye.NodeAdapter({ mount: '/faye', timeout: 45 });

// Servidor HTTP simples para gerenciar CORS e Faye
const server = http.createServer((req, res) => {
  // Define headers CORS para TODAS as requisições
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responde imediatamente a requisições OPTIONS (Preflight)
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
});

// Anexa o Faye ao servidor
bayeux.attach(server);

// Logs de conexão para debug
bayeux.on('handshake', (clientId) => {
  console.log('Cliente conectado ao Faye:', clientId);
});

const PORT = 8085; 
// Otimizado: 0.0.0.0 é fundamental no Docker para permitir conexões externas
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Faye server rodando em http://0.0.0.0:${PORT}/faye`);
});
