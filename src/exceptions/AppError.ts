export enum HttpCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

interface AppErrorArgs {
  name?: string;
  discripton: string;
  status: HttpCode;
  isOperational: boolean;
}

export class Apperror extends Error {
  public readonly name: string;
  public readonly status: HttpCode;
  public readonly isOperational: boolean = true;

  constructor(args: AppErrorArgs) {
    super(args.discripton);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = args.name || 'Error';
    this.status = args.status;
    if (args.isOperational != undefined) {
      this.isOperational = args.isOperational;
    }
    Error.captureStackTrace(this);
  }
}
