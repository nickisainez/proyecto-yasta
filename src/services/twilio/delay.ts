import twilio from "twilio";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);
export default async function sendDelay(telephone: string, name: string) {
  const message = await client.messages.create({
    body: `El estudiante ${name} llego tarde el dia hoy`,
    to: telephone,
    from: "+17752270992"
  });
  return { message };
}
