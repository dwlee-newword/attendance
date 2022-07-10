import { Controller, Get, Render } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get()
  @Render('/index')
  getHello() {
    // return this.appService.getHello();
    console.log('hello!');
    return {
      title: 'Hello World',
      message: 'Hello World',
    };
  }
}
