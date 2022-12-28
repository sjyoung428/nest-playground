import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BoardsModule, PrismaModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
