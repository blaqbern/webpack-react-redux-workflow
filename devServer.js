const path = require('path')
const app = require('express')()

const port = process.env.DEV_SERVER_PORT

const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const compiler = webpack(webpackConfig)

module.exports = function startDevServer() {
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

  app.listen(port, 'localhost', (err) => {
    if (err) {
      console.log('DEV_SERVER ERROR:', err)
    } else {
      console.log(`Development server listening on port ${port}`)
    }
  })
}
