import { z } from "zod";

const envSchema = z.object({
  DEPLOYMENT: z.union([z.literal("prod"), z.literal("dev")]),
});

envSchema.parse(process.env);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
