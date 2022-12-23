import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-boards.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Board, BoardStatus } from '@prisma/client';
@Injectable()
export class BoardsService {
  constructor(private prisma: PrismaService) {}

  async getAllBoards(): Promise<Board[]> {
    return await this.prisma.board.findMany();
  }

  async createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    return await this.prisma.board.create({
      data: {
        title,
        description,
        status: BoardStatus.PUBLIC,
      },
    });
  }

  async getBoardById(id: string) {
    const found = await this.prisma.board.findUnique({
      where: {
        id,
      },
    });
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  async deleteBoard(id: string) {
    const found = await this.getBoardById(id);
    return await this.prisma.board.delete({
      where: {
        id: found.id,
      },
    });
  }

  async updateBoardStatus(id: string, status: BoardStatus) {
    const board = await this.getBoardById(id);
    return await this.prisma.board.update({
      where: {
        id: board.id,
      },
      data: {
        status,
      },
    });
  }
}
