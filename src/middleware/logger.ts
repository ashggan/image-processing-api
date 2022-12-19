import winston from 'winston';
const { timestamp, printf } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp}  ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
    myFormat
  ),
  defaultMeta: { service: 'Image processing' },
  transports: [
    // logging user transactions
    new winston.transports.File({ filename: 'log/info.log' }),
    // logging errors
    new winston.transports.File({ filename: 'log/error.log', level: 'error' }),
    // logging expections
    new winston.transports.File({
      filename: 'log/exceptions.log',
      handleExceptions: true,
    }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: 'log/rejections.log' }),
  ],
});

export default logger;
