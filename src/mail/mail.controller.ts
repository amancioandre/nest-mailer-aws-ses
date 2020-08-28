import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
    constructor(private readonly mailService: MailService) {}

    @Post()
    async sendMail(@Body() body): Promise<unknown> {
        console.log(body)
        return await this.mailService.sendMail('this is a test.')
    }
}
