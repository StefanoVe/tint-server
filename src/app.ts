import * as express from 'express';
import * as http from 'http';
import 'express-async-errors';

import { errorHandler } from './middlewares/error-handler';

/* ROUTES */
import { findBridgeRouter } from './routes/find-bridge';
import { getLightsRouter } from './routes/get-ligths';
import { signUpUserRouter } from './routes/signup-user';
import { json } from 'express';

const app = express();
app.use(json());

app.use(findBridgeRouter);
app.use(getLightsRouter);
app.use(signUpUserRouter);

app.use(errorHandler);
app.all('*', () => {
  throw new Error('route not found');
});

const server = http.createServer(app);

export { server };
