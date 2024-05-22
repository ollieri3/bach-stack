import { z } from "zod";

/**
 * Server Environment Variables
 */
const envSchema = z.object({
  DEPLOYMENT: z.union([z.literal("prod"), z.literal("dev")]),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_PORT: z.string(),
  DB_NAME: z.string(),
  DB_URL: z.string(),
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
