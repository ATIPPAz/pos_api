const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/2', (req, res) => {
  res.send('Hello World!')
})
app.get('/3', (req, res) => {
  res.send('Hello World!')
})
app.get('/4', (req, res) => {
  res.send('Hello World!')
})
app.get('/5', (req, res) => {
  res.send('Hello World!')
})
app.get('/6', (req, res) => {
  res.send('Hello World!')
})
app.get('/7', (req, res) => {
  res.send('Hello World!')
})
app.get('/8', (req, res) => {
  res.send('Hello World!')
})
app.get('/9', (req, res) => {
  res.send('Hello World!')
})
app.get('/10', (req, res) => {
  res.send('Hello World!')
})
app.get('/11', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})