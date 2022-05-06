import { MailAdapater, SendMailData } from "../mail-adapter"
import nodemailer from "nodemailer"


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "d790e1559e3f96",
        pass: "a4173e0f2a16bc"
    }
});

export class NodemailerMailAdapter implements MailAdapater {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe FeedGet <oi@feedget.com>',
            to: 'Thiago Lauter <thiagolauterti@gmail.com>',
            subject,
            html: body
        })
    }

}