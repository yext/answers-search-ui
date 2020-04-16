import http from 'http';
import handler from 'serve-handler';

export default async function setupServer (ctx) {
  const server = http.createServer((request, response) => {
    return handler(request, response);
  });
  server.listen(9999);
  ctx.server = server;
}
