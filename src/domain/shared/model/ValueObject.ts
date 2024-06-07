export abstract class ValueObject {
  public equals(valueObject: ValueObject): boolean {
    return JSON.stringify(this) === JSON.stringify(valueObject);
  }
}
