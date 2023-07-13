import { Prisma, Order } from "@prisma/client";

export interface OrdersRepository {
  create(data: Prisma.OrderUncheckedCreateInput): Promise<Order>;
}
