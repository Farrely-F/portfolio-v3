import nodemailer from "nodemailer";

// Create a reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASSWORD as string,
  },
});

export async function sendEmail(data: {
  name: string;
  subject: string;
  email: string;
  message: string;
}) {
  try {
    const email = await transporter.sendMail({
      to: process.env.EMAIL_RECEIVER as string,
      subject: `New message from Website: ${data.subject}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
        

        sent from farrel.cloud
      `,
    });

    console.log("Email sent successfully!");

    if (!email || !email.accepted) {
      throw new Error("Error sending email");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message);
    }
  }
}
