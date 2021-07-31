import { Injectable } from '@nestjs/common';
import { EntityPostDTO, EntityPutDTO } from './dto';

@Injectable()
export class AppService {
  getPut(): EntityPutDTO {
    return {
      id: 1,
      info: {
        id: 1,
        name: "name",
      },
    };
  }

  getPost(): EntityPostDTO {
    return {
      id: 1,
      info: {
        name: "name",
      },
    };
  }
}
