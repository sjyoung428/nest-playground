import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BoardsModule, PrismaModule],
  providers: [PrismaService],
})
export class AppModule {}
