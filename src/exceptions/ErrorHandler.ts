import { Response } from 'express';
import { Apperror, HttpCode } from './AppError';

class ErrorHandler {
  private isTrusted(error: Error): boolean {
    if (error instanceof Apperror) {
      return error.isOperational;
    }
    return false;
  }

  public handleErrors(error: Apperror | Error, res?: Response) {
    console.log('handleErrors public function');
    if (this.isTrusted(error)) {
      this.HandleTrustedError(<Apperror>error, <Response>res);
    } else {
      this.handleCriticalError(error, res);
    }
  }

  private HandleTrustedError(error: Apperror, res: Response) {
    console.log(`here is error handling MW ${error.status}`);
    res.status(error.status).json({ error });
  }

  private handleCriticalError(error: Error | Apperror, res?: Response) {
    if (res) {
      res
        .status(HttpCode.INTERNAL_SERVER_ERROR)
        .json({ message: 'internal server error' });
    }
    console.log('Application encountered a critical error. Exiting');
    // process.exit(1);
  }
}

const errorHandler = new ErrorHandler();
export default errorHandler;
