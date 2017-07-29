const path = require('path');
const fs = require('fs');

module.exports = {
  entry: './index.js',
  target: 'node',
  externals: fs.readdirSync("node_modules")
    .reduce(function(acc, mod) {
      if (mod === ".bin") {
        return acc;
      }
      acc[mod] = "commonjs " + mod;
      return acc;
    }, {}),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}