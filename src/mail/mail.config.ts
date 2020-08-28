import * as AWS from 'aws-sdk';
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter"
import { MailerOptions } from '@nestjs-modules/mailer';


export const config: MailerOptions = {
    transport: {
        SES: new AWS.SES({
            accessKeyId: '',
            secretAccessKey: '',
        })
    },
    defaults: {
      from: "no-reply",
    },
    template: {
      dir: __dirname + '/templates',
      adapter: new EjsAdapter(),
      options: {
        strict: true
      }
    }
  }