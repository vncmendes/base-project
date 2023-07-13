import { beforeEach, describe, expect, it } from "vitest";
import { inMemoryProductsRepository } from "@/repositories/in-memory/in-memory-products-repository";
import { ProductUseCase } from "./product";
import { randomUUID } from "crypto";

let productsRepository: inMemoryProductsRepository;
let sut: ProductUseCase;

describe("Order Use Case", () => {
  beforeEach(() => {
    productsRepository = new inMemoryProductsRepository();
    sut = new ProductUseCase(productsRepository);
  });

  it("should be able to register a order", async () => {
    const { product } = await sut.execute({
      id: randomUUID(),
      name: "Leite Vegetal",
      amount: "10",
      value: "20",
      description: "organico",
    });

    expect(product.id).toEqual(expect.any(String));
  });
});
