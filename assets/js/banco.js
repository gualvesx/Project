//Acesso: http://localhost:3000/

const express = require('express');
const mysql = require('mysql2/promise');

const app = express();


async function connectDB() {
    try {
        const connection = await mysql.createConnection({
            host: '10.111.4.30',
            user: 'dev1b',
            password: 'Sen4i2024',
            database: 'dev1b'
        });

        console.log('Conectado com sucesso ao banco de dados!');
        return connection;
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1); 
    }
}


app.get('/', async (req, res) => {
    const connection = await connectDB();
    const [rows] = await connection.execute('SELECT * FROM DZ_usuarios LIMIT 10'); 
    res.json(rows);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
