import { Prisma, Order } from "@prisma/client";

export interface OrdersRepository {
  create(data: Prisma.OrderCreateInput): Promise<Order>;
}
