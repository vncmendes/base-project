import { Product, Prisma } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { ProductsRepository } from "../products-repository";

export class inMemoryProductsRepository implements ProductsRepository {
  public items: Product[] = [];

  async create(data: Prisma.ProductUncheckedCreateInput) {
    const product = {
      id: randomUUID(),
      name: data.name,
      amount: data.amount,
      value: data.value,
      description: data.description ? data.description : null,
    };

    this.items.push(product);

    return product;
  }
}
