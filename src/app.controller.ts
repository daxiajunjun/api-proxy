import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
  Response,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as proxy from 'express-http-proxy';
import { Request as Req, Response as Res } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('/proxy')
  // proxy(@Query('url') url: string, @Request() req: Req, @Response() res: Res) {
  //   req.url = '';
  //   console.log(req.url);
  //   try {
  //     return proxy(url);
  //   } catch (e) {
  //     console.log('22');
  //     console.log(e);
  //   }
  // }
}
