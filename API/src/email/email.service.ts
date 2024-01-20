import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {

  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'zkerroumi42@gmail.com', 
        pass: 'password', 
      },
    });
  }

  async sendPasswordResetEmail(email: string, resetToken: string): Promise<void> {
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'zkerroumi42@gmail.com', 
      to: email,
      subject: 'Password Reset',
      text: `You requested a password reset. Use the following token: ${resetToken}`,
    };

    // Send the email
    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Password reset email sent to ${email} with token: ${resetToken}`);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send password reset email');
    }
  }
}

// import { Injectable } from '@nestjs/common';
// import * as nodemailer from 'nodemailer';

// @Injectable()
// export class EmailService {

//   private transporter: nodemailer.Transporter;

//   constructor() {
//     this.transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'zkerroumi42@gmail.com',
//         clientId: 'YOUR_CLIENT_ID', // Replace with your actual client ID
//         clientSecret: 'YOUR_CLIENT_SECRET', // Replace with your actual client secret
//         refreshToken: 'YOUR_REFRESH_TOKEN', // Replace with your actual refresh token
//         accessToken: '',
//       },
//     });
//   }

//   async sendPasswordResetEmail(email: string, resetToken: string): Promise<void> {
//     const mailOptions: nodemailer.SendMailOptions = {
//       from: 'zkerroumi42@gmail.com',
//       to: email,
//       subject: 'Password Reset',
//       text: `You requested a password reset. Use the following token: ${resetToken}`,
//     };

//     // Send the email
//     try {
//       await this.transporter.sendMail(mailOptions);
//       console.log(`Password reset email sent to ${email} with token: ${resetToken}`);
//     } catch (error) {
//       console.error('Error sending email:', error);
//       throw new Error('Failed to send password reset email');
//     }
//   }


// }

// ***********
// import { Injectable } from '@nestjs/common';
// import * as nodemailer from 'nodemailer';
// import * as fs from 'fs';

// @Injectable()
// export class EmailService {

//   private transporter: nodemailer.Transporter;

//   constructor() {
//     const refreshToken = JSON.parse(fs.readFileSync('refresh-token.json', 'utf-8')).refresh_token;

//     this.transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'zkerroumi42@gmail.com',
//         clientId: 'YOUR_CLIENT_ID', // Replace with your actual client ID
//         clientSecret: 'YOUR_CLIENT_SECRET', // Replace with your actual client secret
//         refreshToken: refreshToken, // Use the retrieved refresh token
//         accessToken: '',
//       },
//     });
//   }

//   async sendPasswordResetEmail(email: string, resetToken: string): Promise<void> {
//     const mailOptions: nodemailer.SendMailOptions = {
//       from: 'zkerroumi42@gmail.com',
//       to: email,
//       subject: 'Password Reset',
//       text: `You requested a password reset. Use the following token: ${resetToken}`,
//     };

//     // Send the email
//     try {
//       await this.transporter.sendMail(mailOptions);
//       console.log(`Password reset email sent to ${email} with token: ${resetToken}`);
//     } catch (error) {
//       console.error('Error sending email:', error);
//       throw new Error('Failed to send password reset email');
//     }
//   }
// }

