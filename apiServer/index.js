const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT

const publicPath = path.join(__dirname, '..', 'public')

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

if (process.env.NODE_ENV === 'development') {
  const proxy = require('http-proxy').createProxyServer()
  app.all('/build/*', (req, res) => proxy.web(req, res, { target: 'http://localhost:8080' }))
  proxy.on('error', (err) => console.log('Could not connect to webpack dev server', err))
}

app.use(express.static(publicPath))
app.get('/api', (req, res) => res.send('Awww, thanks for stopping by!'))

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(`API_SERVER ERROR: ${err}`)
  } else {
    console.log(`API server listening on port ${port}`)
  }
})
