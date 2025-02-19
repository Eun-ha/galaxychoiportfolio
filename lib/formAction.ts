"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_KEY,
  },
});

const NameSchema = z.string().min(1, { message: "이름을 작성해 주세요." });
const EmailSchema = z
  .string()
  .email({ message: "유효하지 않은 이메일 주소 입니다." });
const TextareaSchema = z
  .string()
  .min(1, { message: "문의사항을 작성해 주세요." });

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const sendEmail = async (prevState: any, formData: FormData) => {
  const nameValidation = NameSchema.safeParse(formData.get("name"));
  const emailValidation = EmailSchema.safeParse(formData.get("email"));
  const TextareaValidation = TextareaSchema.safeParse(formData.get("textarea"));

  if (!nameValidation.success) {
    console.log("nameValidation");
    console.log(nameValidation.error.errors[0].message);
    return nameValidation.error.errors[0].message;
  }
  if (!emailValidation.success) {
    console.log("emailValidation");
    console.log(emailValidation.error.errors[0].message);
    return emailValidation.error.errors[0].message;
  }
  if (!TextareaValidation.success) {
    console.log("TextareaValidation");
    console.log(TextareaValidation.error.errors[0].message);
    return TextareaValidation.error.errors[0].message;
  }

  const name = nameValidation.data;
  const email = emailValidation.data;
  const textarea = TextareaValidation.data;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `문의하기: ${name}(${email})`,
      html: `<p>${textarea}</p>`,
    });

    console.log("이메일 전송 성공");
    return { success: true, message: "이메일 전송 성공!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "이메일 전송 실패..." };
  }
};
