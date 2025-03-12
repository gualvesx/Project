const express = require('express')
const mysql = require('mysql2/promise')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())
app.listen(8443, () => console.log('Servidor Online'))

const connection = mysql.createPool({
    host: '10.111.4.30',
    user: 'dev1b',
    database: 'dev1b',
    password: 'Sen4i2024'
})

//Rota para teste de banco de dados
app.get('/statusbd', async (req, res) => {
    const [rows] = await connection.execute('select now()')

    res.json({
        msg: rows
    })

})


//CRUD - Read
app.get('/localizacoes', async (req, res) => {

    const sql = 'select * from DZ_usuarios;'
    const [rows] = await connection.execute(sql)

    res.json({
        localizacoes: rows
    })
})

app.post('/localizacoes/cadastrar', async (req, res) => {

    console.log(req.body)
    const {nome, email, senha} = req.body

    const sql = "insert into DZ_usuarios (nome, email, senha, criado_em) values (? , ? , ?, ?)"

    const [rows] = await connection.execute(sql, [nome, email, senha, new Date()] )

    res.json({ 
        msg: rows
    })

})
