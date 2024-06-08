import { GetStoreRatingsResponse } from "@ofood/contracts";

export interface GetStoreRatingsQuery {
  handle(data: GetStoreRatingsQueryData): Promise<GetStoreRatingsResponse>;
}

export type GetStoreRatingsQueryData = {
  storeId: string;
};
