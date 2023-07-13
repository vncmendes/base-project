import { beforeEach, describe, expect, it } from "vitest";
import { inMemoryOrdersRepository } from "@/repositories/in-memory/in-memory-orders-repository";
import { OrderUseCase } from "./order";

let ordersRepository: inMemoryOrdersRepository;
let sut: OrderUseCase;

describe("Order Use Case", () => {
  beforeEach(() => {
    ordersRepository = new inMemoryOrdersRepository();
    sut = new OrderUseCase(ordersRepository);
  });

  it("should be able to register a order", async () => {
    const { order } = await sut.execute({
      userId: "user-01",
    });
    expect(order.id).toEqual(expect.any(String));
  });
});
