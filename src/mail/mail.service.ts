import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path'
@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendMail(text: string): Promise<unknown> {
      try {
        return await this
          .mailerService
          .sendMail({
            to: 'aademora@mtu.edu',
            from: 'aademora@mtu.edu',
            subject: 'Testing Nest Mailermodule with template ✔',
            template: 'index', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
            context: {
              text
            }
          });
      } catch (error) {
          console.log(error)
      }
  }
}
