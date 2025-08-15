import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const {
    email,
    firstName,
    phoneNumber,
    lastName,
    message,
    subject,
  } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Alwa <onboarding@resend.dev>",
      to: ["alaa.eldeyn@gmail.com"],
      subject: subject || "New Message From Portfolio",
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
        subject,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
