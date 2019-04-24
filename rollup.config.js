var jsx = require("acorn-jsx")

module.exports = {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  acornInjectPlugins: [
    jsx()
  ],
}
