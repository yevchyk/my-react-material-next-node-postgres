const routes = module.exports = require('next-routes')()

routes.add('rooms', '/rooms')
routes.add('room', '/rooms/room/:id', '/rooms/room');

// .add('about')
// .add('blog', '/blog/:slug')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})