const express = require('express')
const app = express()
const port = Process.env. port || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login', (req, res) => res.sendFile(__dirname+'/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))