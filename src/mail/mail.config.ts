import * as AWS from 'aws-sdk';
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter"
import { MailerOptions } from '@nestjs-modules/mailer';
import { join } from 'path'
import * as dotenv from 'dotenv'

dotenv.config()

export const config: MailerOptions = {
    transport: {
        SES: new AWS.SES({
            accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SES_SECRET_KEY,
            region: 'us-east-1',
            apiVersion: '2010-12-01'
        })
    },
    defaults: {
      from: "no-reply",
    },
    template: {
      dir: join(__dirname, '..', '/templates'),
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true
      }
    }
  }