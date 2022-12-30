import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'SECRET KEY',
      signOptions: {
        expiresIn: 60 * 60,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
