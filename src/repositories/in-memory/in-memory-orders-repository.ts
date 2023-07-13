import { Order, Prisma } from "@prisma/client";
import { OrdersRepository } from "../orders-repository";
import { randomUUID } from "crypto";

export class inMemoryOrdersRepository implements OrdersRepository {
  public items: Order[] = [];

  async create(data: Prisma.OrderUncheckedCreateInput) {
    const order = {
      id: randomUUID(),
      created_at: new Date(),
      validated_at: data.validated_at ? new Date(data.validated_at) : null,
      user_id: data.user_id,
    };

    this.items.push(order);

    return order;
  }
}
