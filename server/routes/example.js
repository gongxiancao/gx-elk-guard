export default function (server) {

  server.route({
    path: '/api/gx_elk_guard/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
