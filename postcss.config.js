module.exports = {
  plugins: [
    require('postcss-prefixer')({
      prefix: 'b4-',
      ignore: []
    })
  ]
}
