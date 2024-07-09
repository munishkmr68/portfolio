import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { user_name, user_email, user_mobile, user_subject, user_message } =
      await request.json();

    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: user_email,
      to: SMTP_EMAIL,
      subject: user_subject,
      html: `
        <p>name: ${user_name}</p>
        <p>mobile: ${user_mobile}</p>
        <p>message: ${user_message}</p>
        `,
    });

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
