import { Price } from './Price'

export class Storage {
  private constructor(
    private readonly capacity: string,
    private readonly price: Price,
  ) {
    if (!this.isValidCapacity(capacity)) {
      throw new Error('Capacidad inválida')
    }
  }

  static create(capacity: string, price: Price): Storage {
    return new Storage(capacity, price)
  }

  private isValidCapacity(capacity: string): boolean {
    return /^\d+(?:GB|TB)$/.test(capacity)
  }

  getCapacity(): string {
    return this.capacity
  }

  getPrice(): Price {
    return this.price
  }
}
