import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class LoggerOwner implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Middleware executed');
    next();
  }
}
