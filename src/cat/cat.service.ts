import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'MYEOW';
  }

  public introduce(): string {
    return 'my name is TOM';
  }
}
