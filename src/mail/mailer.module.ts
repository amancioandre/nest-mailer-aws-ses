import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer'
import { config } from './mail.config'

@Module({
    imports: [
        MailerModule.forRoot(config)
    ],
  providers: [MailService]
})
export class MailModule {}
