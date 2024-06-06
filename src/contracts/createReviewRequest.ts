import { z } from "zod";

export const CreateReviewRequestSchema = z.object({
  order_id: z.string(),
  store_id: z.string(),
  order_feedback: z.object({
    rating: z.number(),
    comment: z.string(),
  }),
  delivery_feedback: z.object({
    rating: z.number(),
    comment: z.string(),
  }),
});

export type CreateReviewRequest = z.infer<typeof CreateReviewRequestSchema>;
