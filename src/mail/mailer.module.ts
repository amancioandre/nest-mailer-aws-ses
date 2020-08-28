import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer'
import { config } from './mail.config'
import { MailController } from './mail.controller';

@Module({
    imports: [
        MailerModule.forRoot(config),
    ],
  providers: [MailService],
  controllers: [MailController]
})
export class MailModule {}
