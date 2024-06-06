export interface CreateReviewCommand {
  handle(request: any): Promise<void>;
}
