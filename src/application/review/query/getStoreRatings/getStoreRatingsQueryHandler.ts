import { NotFoundError } from "@ofood/domain";
import { GetStoreRatingsResponse } from "@ofood/contracts";
import { IStoreRatingsCacheProvider } from "../../IStoreRatingsCacheProvider.js";
import { GetStoreRatingsQuery, GetStoreRatingsQueryData } from "./getStoreRatingsQuery.js";

export class GetStoreRatingsQueryHandler implements GetStoreRatingsQuery {
  private readonly cache: IStoreRatingsCacheProvider;

  constructor(cache: IStoreRatingsCacheProvider) {
    this.cache = cache;
  }

  async handle(data: GetStoreRatingsQueryData): Promise<GetStoreRatingsResponse> {
    const x = await this.cache.get(data.storeId);

    if (!x) {
      throw new NotFoundError({ resource: "Store", id: data.storeId });
    }

    return x;
  }
}
