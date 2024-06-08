import { z } from "zod";

export const CreateReviewRequestSchema = z.object({
  order_id: z.string(),
  store_id: z.string(),
  order_feedback: z.object({
    rating: z.number().int().min(1).max(5),
    comment: z.string().max(500),
  }),
  delivery_feedback: z.object({
    rating: z.number().int().min(1).max(5),
    comment: z.string().max(500),
  }),
});

export type CreateReviewRequest = z.infer<typeof CreateReviewRequestSchema>;
