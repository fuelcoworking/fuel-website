import { Resend } from "resend";

// The Resend SDK throws if constructed without an API key, so only build the
// client when one is configured. Actions must null-check `resend` before use.
export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;
