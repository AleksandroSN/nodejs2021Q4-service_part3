import { app, PORT } from "./app";

/**
 * Start HTTP_SERVER on port from `process.env.PORT` or default port `9999`.
 * Function is async.
 * @returns Promise<void>
 */

const start = async () => {
  try {
    await app.listen(PORT);
    process.stdout.write(`START as ${PORT} \n`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
