import { IStoreRatingsCacheProvider } from "@ofood/application";
import { IRedisClient } from "../configuration/redis.js";
import { storeRatingsCacheKey } from "./storeRatingsCacheKey.js";

export class StoreRatingsCacheProvider implements IStoreRatingsCacheProvider {
  private readonly cache: IRedisClient;

  constructor(cache: IRedisClient) {
    this.cache = cache;
  }

  async set(storeId: string, data: Record<string, string>): Promise<void> {
    const key = storeRatingsCacheKey(storeId);

    await this.cache.hSet(key, Object.entries(data));
  }

  async get(storeId: string): Promise<any> {
    const key = storeRatingsCacheKey(storeId);

    return await this.cache.hGetAll(key);
  }
}
