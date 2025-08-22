const fp = require('fastify-plugin')

async function pocPluginFastify (fastify, options = {}) {
  fastify.decorate('hello', function () {
    return 'Hey dude!'
  })
}
module.exports = fp(pocPluginFastify, {
  fastify: '5.x',
  name: 'poc-plugin-fastify'
})

module.exports.default = pocPluginFastify
module.exports.pocPluginFastify = pocPluginFastify
