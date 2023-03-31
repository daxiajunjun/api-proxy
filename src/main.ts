import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as proxy from 'express-http-proxy';

function proxyOpenAIHost() {
  return 'https://api.openai.com';
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    '/proxy_chat',
    proxy(proxyOpenAIHost, {
      proxyReqPathResolver: function (req) {
        return '/v1/chat/completions';
      },
    }),
  );
  await app.listen(3004);
}
bootstrap();
