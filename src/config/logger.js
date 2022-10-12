import { createLogger, transports, format } from 'winston';
import environment from './environment';
const { combine, printf, timestamp, colorize, json } = format;

const getTransports = (() => {
  if (environment.isDev) {
    return [
      new transports.Console({
        format: combine(
          timestamp(),
          colorize(),
          printf(({ level, message, timestamp }) => `${timestamp} [${level}] : ${message}`)
        ),
      }),
    ];
  } else {
    return [
      new transports.File({
        filename: './logs/info.log',
        level: 'warn',
        format: combine(timestamp(), json()),
      }),
      new transports.Console({
        format: combine(
          timestamp(),
          colorize(),
          printf(({ level, message, timestamp }) => `${timestamp} [${level}] : ${message}`)
        ),
      }),
    ];
  }
})();

const logger = createLogger({
  level: environment.isDev ? 'debug' : 'warn',
  transports: getTransports,
});

export default logger;
