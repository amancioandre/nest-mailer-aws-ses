import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mailer.module';
import { ConfigModule} from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
