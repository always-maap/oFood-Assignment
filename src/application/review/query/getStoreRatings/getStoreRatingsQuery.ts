export interface GetStoreRatingsQuery {
  handle(data: GetStoreRatingsQueryData): Promise<void>;
}

export type GetStoreRatingsQueryData = {
  storeId: string;
};
