const server = require('./src/app')

const port = 3333


server.listen(port, () => {
    console.log(`SERVIDOR HTTP INICIADO NA PORTA ${port}`)
})

