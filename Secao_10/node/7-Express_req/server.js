const { response } = require('express');
const express = require('express');

// /profiles/12345?campanha=googleads

const app = express();

app.use(express.urlencoded({
        extended: true
}));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="name">
            Telefone: <input type="text" name="telefone">
            <button type="submit">Send</button>
        </form>
    `);
});


app.get('/testes/:isUsuarios?/:parametros?/', (req, res) => {

    // /profiles/3
    // /profiles/?chave1=valor&chave2=valor2&chave3=valor3

    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.name}`);
});

app.listen(5000, () => {
    console.log('Acessar http://localhost:5000');
    console.log('Servidor executando na porta 5000');
});


