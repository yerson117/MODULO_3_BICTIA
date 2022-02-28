const express = require("express")
//console.log(express)
const app = express()
const http = require("http").Server(app)
const bodyParser = require("body-parser")
const cors = require("cors")
const port = 9000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res, next){
    console.log('get only get !!') 
    res.json({
         status: true,
     })
})

app.get('/:id', function (req, res, next){
    console.log('get by param id!!')
    console.log('id:    ', req.params.id)
    res.json({
        status: true,
    })
})

app.post('/', function (req, res, next){
    console.log('insert (post)!!')
    console.log(req.body)
    res.json({
        "status": true,
    })
})

app.put('/', function (req, res, next){
    console.log('update (put)!!')
    console.log(req.body)
    res.json({
        "status": true,
    })
})

app.delete('/:id', function (req, res, next){
    console.log('delete!!')
    console.log(req.params.id)
    res.json({
        "status": true,
    })
})

http.listen(port, () => {
    console.log("server is running on port: ", port)
})