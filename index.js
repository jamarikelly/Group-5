const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/jamari', (req, res) => {
    res.sendFile(path.join(__dirname, 'jamari.html'))
  })

app.post('/comment', (req, res) => {

console.log(req.body)
res.json(req.body)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
