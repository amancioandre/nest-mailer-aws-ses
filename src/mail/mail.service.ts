import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendMail(text: string): Promise<void> {
        this
        .mailerService
        .sendMail({
          to: 'aademora@mtu.edu',
          from: 'noreply@nestjs.com',
          subject: 'Testing Nest Mailermodule with template ✔',
          template: __dirname + '../templates/index', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
          context: {  // Data to be sent to template engine.
            text
          },
        })
        .then(() => {})
        .catch(() => {});
    }

}
