const { response } = require('express');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="name">
            <button type="submit">Send</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

app.listen(5000, () => {
    console.log('Acessar http://localhost:5000');
    console.log('Servidor executando na porta 5000');
});


