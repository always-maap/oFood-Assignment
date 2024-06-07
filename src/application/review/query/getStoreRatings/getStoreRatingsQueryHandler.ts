import { IStoreRatingsCacheProvider } from "../../IStoreRatingsCacheProvider.js";
import { GetStoreRatingsQuery, GetStoreRatingsQueryData } from "./getStoreRatingsQuery.js";

export class GetStoreRatingsQueryHandler implements GetStoreRatingsQuery {
  private readonly cache: IStoreRatingsCacheProvider;

  constructor(cache: IStoreRatingsCacheProvider) {
    this.cache = cache;
  }

  async handle(data: GetStoreRatingsQueryData): Promise<void> {
    const x = await this.cache.get(data.storeId);

    return x;
  }
}
