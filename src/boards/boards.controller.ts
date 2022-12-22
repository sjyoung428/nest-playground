import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  // 암묵적으로 private boardsService: BoardsService; 를 선언
  constructor(private boardsService: BoardsService) {}
}
