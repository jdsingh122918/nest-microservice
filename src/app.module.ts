import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppUserController } from './app-user/app-user.controller';
import { ConfigModule } from '@nestjs/config';
import { OperatorModule } from './operator/operator-module';

@Module({
  imports: [ConfigModule.forRoot(), OperatorModule],
  controllers: [AppController, AppUserController],
  providers: [AppService],
})
export class AppModule {}
