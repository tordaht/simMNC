import express from 'express';
import path from "path";
import http from 'http';
import { Server as SocketIO } from 'socket.io';

const app = express();
const server = http.createServer(app);
export const io = new SocketIO(server);

app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Basit NLP mantığı - gerçek projede NLP.js kullanılabilir
app.post('/api/query', async (req, res) => {
  const { question } = req.body;
  const answer = question.includes('enerji')
    ? 'Enerji seviyesi şu anda sabit.'
    : 'Bunu henüz bilmiyorum.';
  res.json({ answer });
});

io.on('connection', socket => {
  console.log('Client connected');
  socket.on('chatMessage', msg => {
    io.emit('chatMessage', msg);
  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on :${PORT}`));
