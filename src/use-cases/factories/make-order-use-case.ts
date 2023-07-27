import { OrderUseCase } from "../order";
import { PrismaOrdersRepository } from "@/repositories/prisma/prisma-order-repository";

export function makeOrderUseCase() {
  const orderRepository = new PrismaOrdersRepository();
  const orderUseCase = new OrderUseCase(orderRepository);

  return orderUseCase;
}
