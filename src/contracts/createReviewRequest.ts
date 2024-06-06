import { z } from "zod";

export const CreateReviewRequestSchema = z.object({
  order_id: z.number(),
  store_id: z.number(),
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
