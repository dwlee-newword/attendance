import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Render('home')
  @Get()
  getHello() {
    // return this.appService.getHello();
    console.log('hello');
    return {
      title: 'Hello World',
      message: 'Hello World',
    };
  }
  @Get('/check')
  check() {
    return 'ok';
  }
}
