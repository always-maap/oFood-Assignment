export interface IWorker {
  invoke(): Promise<void>;
}
