import z from "zod";
export const inputSchema = z.object({
  prompt: z.string(),
});
