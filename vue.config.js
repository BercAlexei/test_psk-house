module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test_psk-house/dist'
    : '/'
}