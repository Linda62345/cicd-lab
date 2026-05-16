import Fastify, { FastifyServerOptions } from 'fastify';

export function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify({
    logger: options.logger ?? true,
    ...options
  });

  app.get('/', async () => {
    return {
      message: 'CI/CD Lab Fastify app is running',
      version: process.env.APP_VERSION || 'dev'
    };
  });

  app.get('/health', async () => {
    return {
      status: 'ok'
    };
  });

  return app;
}

// 故意的型別錯誤，用於示範 CI 失敗案例
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const intentionalError: number = 222;
