export class WorkerProxy {
  private workerName: string = "";
  private timer: number = 0;

  protected before() {
    this.timer = performance.now();
  }

  public async execute(name: string, invoke: () => Promise<void>): Promise<void> {
    this.before();

    this.workerName = name;
    await invoke();

    this.after();
  }

  protected after() {
    const executionTime = performance.now() - this.timer;
    console.log(`${this.workerName} execution took: ${executionTime.toFixed(2)}ms`);
  }
}
