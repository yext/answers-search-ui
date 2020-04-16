import http from 'http';
import handler from 'serve-handler';

/**
 * Initalizes the server to port 9999
 * @param {*} ctx the context from the fixture
 */
export async function setupServer (ctx) {
  const server = http.createServer((request, response) => {
    return handler(request, response);
  });
  server.listen(9999);
  ctx.server = server;
}

/**
 * Engages the shutdown procedures for the server
 * @param {*} ctx the context from the fixture
 */
export async function shutdownServer (ctx) {
  ctx.server.close();
}
