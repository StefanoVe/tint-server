import { server } from './app';

const start = async () => {
  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Listening on port ${port}!`);
  });
};

start();
