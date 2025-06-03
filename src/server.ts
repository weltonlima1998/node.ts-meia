import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRouter from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//ROTAS
server.use('/', mainRouter);
server.use((req, res) => {
    res.send('Página não encontrada');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT);
console.log(`Servidor rodando na porta ${PORT}`);