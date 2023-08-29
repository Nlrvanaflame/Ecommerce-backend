import { NextFunction, Request, Response } from 'express';

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(err);
  }
  
  res.status(err.status || 500);
  res.json({ error: err.message });
}

export default errorHandler;
