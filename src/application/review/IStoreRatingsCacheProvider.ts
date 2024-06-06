export interface IStoreRatingsCacheProvider {
  set(storeId: string, data: any): Promise<void>;
  get(storeId: string): Promise<any>;
}
