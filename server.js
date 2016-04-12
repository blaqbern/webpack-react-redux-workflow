const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const app = express()

const compiler = webpack(webpackConfig)

if (process.env.NODE_ENV === 'development') {
  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
      },
    })
  )
  app.use(
    require('webpack-hot-middleware')(compiler)
  )
}

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
)

app.listen('3000', 'localhost', (err) => {
  if (err) {
    console.log('Error!', err)
  } else {
    console.log('Express server listening on port 3000')
  }
})
