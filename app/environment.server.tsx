import { z } from "zod";

/**
 * Server Environment Variables
 */
const envSchema = z.object({
  DEPLOYMENT: z.union([z.literal("prod"), z.literal("dev")]),
});

envSchema.parse(process.env);

/**
 * Client environment variables
 *
 * Variables added here will be available on window.ENV on the client.
 *
 * ❗Do not store sensitive data like private API keys in these variables❗
 */
export const CLIENT_ENV = {
  DEPLOYMENT: process.env.DEPLOYMENT,
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }

  interface Window {
    ENV: typeof CLIENT_ENV;
  }
}
