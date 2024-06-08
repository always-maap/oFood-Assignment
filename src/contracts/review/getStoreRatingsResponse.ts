import { z } from "zod";

export const GetStoreRatingsSchema = z.object({
  rating: z.number(),
  comments_count: z.number(),
  rates_count: z.number(),
  rating_one_count: z.number(),
  rating_two_count: z.number(),
  rating_three_count: z.number(),
  rating_four_count: z.number(),
  rating_five_count: z.number(),
});

export type GetStoreRatingsResponse = z.infer<typeof GetStoreRatingsSchema>;
