import express from 'express';
import chalk from 'chalk';
import environment from './config/environment';
import helmet from 'helmet';
import cors from 'cors';
import logger from 'morgan';

class App {
  constructor() {
    this.app = express();
    this.app.use(logger('dev', { skip: (req, res) => environment.nodeEnv === test }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      cors({
        origin: ['http://localhost:3000'],
        // credentials: true,
        methods: ['POST', 'DELETE', 'PUT', 'PATCH'],
      })
    );
    this.app.use(helmet());
    this._setupRoutes();
  }

  start() {
    this._listen();
  }

  _setupRoutes() {
    // TODO : Setup routes
  }

  _listen() {
    const { port, nodeEnv } = environment;
    this.app.listen(port, () => {
      console.log(
        chalk.cyanBright.inverse(
          `Server is running on port : ${port}! | Execution Environment : ${nodeEnv.toLocaleUpperCase()}`
        )
      );
    });
  }
}

export default App;
