import twilio from "twilio";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

function generateCode() {
  return Math.floor(1000 + Math.random() * 9000);
}

export default async function sendSMS(name: string, phoneNumber: string) {
  try {
    const code = generateCode();
    const message = await client.messages.create({
      body: `Hola ${name}, tu codigo de verificacion es ${code}`,
      to: phoneNumber,
      from: "+12065584814"
    });
    console.log(code, message);
    return { message, code };
  } catch (e) {
    console.log(e);
  }
}
// para usar
// import { sendSMS } from "../services"
// await sendSMS(user.name,user.number)
