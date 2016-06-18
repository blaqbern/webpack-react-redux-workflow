if (process.env.NODE_ENV === 'development') {
  require('./devServer')()
} else if (process.env.NODE_ENV === 'production') {
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.config')

  webpack(webpackConfig).run((err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Webpack bundle(s) successfully created.')
  })
} else {
  console.log('Unknown value for NODE_ENV, check build scripts')
  console.log('Acceptable values are "development" or "production"')
  return
}

require('./apiServer')
