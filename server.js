const path = require('path');
const express = require('express');
const webpack = require('webpack');

const app = express();

// Initialize the production server which serves up webpack'ed files.
const initProductionServer = () => {
  const distDir = __dirname + '/dist';
  app.use('/static', express.static(distDir));
};

// Initialize the development server which hot loads source content webpack.
const initDevelopmentServer = function () {
  const config = require('./webpack.config.dev');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));
//  app.use('/static', express.static(__dirname + '/src/static'));
};

// Depending on mode, initialize the server.
if (process.env['NODE_ENV'] === 'production') {
  initProductionServer();
} else {
  initDevelopmentServer();
}

// In both dev and prod, serve up the top level 'index.html' file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

// Set up the application port (or from environment if hosted).
let appHttpPort = process.env.PORT || 3000;

// Start web server.
app.listen(appHttpPort, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Url: http://localhost:' + appHttpPort);
  }
});
