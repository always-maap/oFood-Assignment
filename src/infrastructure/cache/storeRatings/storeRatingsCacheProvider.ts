import { IStoreRatingsCacheProvider } from "@ofood/application";
import { GetStoreRatingsResponse } from "@ofood/contracts";
import { IRedisClient } from "../configuration/redis.js";
import { storeRatingsCacheKey } from "./storeRatingsCacheKey.js";
import { isEmptyObject } from "../../utils/isEmptyObject.js";

export class StoreRatingsCacheProvider implements IStoreRatingsCacheProvider {
  private readonly cache: IRedisClient;

  constructor(cache: IRedisClient) {
    this.cache = cache;
  }

  async set(storeId: string, data: GetStoreRatingsResponse): Promise<void> {
    const key = storeRatingsCacheKey(storeId);

    await this.cache.hSet(key, Object.entries(data));
  }

  async get(storeId: string): Promise<GetStoreRatingsResponse | null> {
    const key = storeRatingsCacheKey(storeId);

    const resp = await this.cache.hGetAll(key);

    if (isEmptyObject(resp)) {
      return null;
    }

    return Object.fromEntries(Object.entries(resp).map(([k, v]) => [k, +v])) as GetStoreRatingsResponse;
  }
}
