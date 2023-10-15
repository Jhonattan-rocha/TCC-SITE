const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const privateKey = fs.readFileSync('C:\\Users\\Jhinattan Rocha\\Documents\\Trabalho\\chave-privada.pem', 'utf8');
const certificate = fs.readFileSync('C:\\Users\\Jhinattan Rocha\\Documents\\Trabalho\\certificado.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };

// Configurar rota estática para servir os arquivos da build do React
app.use('/', express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });  

// Outras rotas e configurações do seu servidor Express podem ser adicionadas aqui

const server = https.createServer(credentials, app);

server.listen(port, () => {
  console.log(`Aplicativo React rodando em http://localhost:${port}`);
});
