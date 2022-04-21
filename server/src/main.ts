/* eslint-disable prefer-const */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import Redis from 'ioredis';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const RedisStore = require('connect-redis')(session);
  let redis = new Redis();
  app.use(
    session({
      name: 'user cookie',
      store: new RedisStore({ client: redis, disableTTL: true }),
      saveUninitialized: false,
      secret: 'djkljksjdklajk',
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      },
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3333);
}
bootstrap();
