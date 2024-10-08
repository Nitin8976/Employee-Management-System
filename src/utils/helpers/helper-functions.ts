// import * as moment from 'moment';
import * as nodemailer from 'nodemailer';


export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// export function momentFormatedDate(dateFormat: string, joinWith: string) {
//   const formats = dateFormat.split('-');

//   return formats.reduce((prev, current) => {
//     return prev += `${joinWith}${moment().format(current)}`;
//   }, '').trim();
// }
// // 

// src/utils/email.utils.ts


export async function sendEmail(to: string, subject: string, text: string, html: string): Promise<void> {
  // Create a transporter using your email service configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io', // Replace with your SMTP server
    port: 2525, // Replace with your SMTP port
    auth: {
      user: 'd279917c3fe46d', // Replace with your SMTP username
      pass: 'f535c4aae8c7f7', // Replace with your SMTP password
    },
  });

  // Define the email options
  const mailOptions = {
    from: '"ALPHA" <noreply@company.com>', // Replace with your sender address
    to,
    subject,
    text,
    html,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
}
