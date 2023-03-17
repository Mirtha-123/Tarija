const express = require('express'),
    body = require('body-parser'),
    morgan = require('morgan'),
    cors= require('cors'),
    cookie = require('cookie-parser'),
    app = express()
// SERVER

rou1 = require('./routes/principal.js')

server = require('http').Server(app);

path = require('path')



app.use(express.static(path.join(__dirname, '/dist/angular-tarija')))

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(morgan('dev'))
app.use(cookie())

app.use(body.json())
app.use(body.urlencoded({ extended: false }));


app.use('/', rou1)

server.listen(app.get('port'), () => {
    console.log("servidor escuchando" + app.get('port'))
})