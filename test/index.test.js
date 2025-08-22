'use strict'

const { test } = require('node:test')
const Fastify = require('fastify')
const pocPluginFastify = require('..')

test('poc-plugin-fastify is correctly defined', async t => {
  const fastify = Fastify()
  t.after(async () => { await fastify.close() })

  await fastify.register(pocPluginFastify)

  await fastify.ready()
  t.assert.equal(fastify.hello(), 'Hey dude!')
})
