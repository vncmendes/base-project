import { Order } from "@prisma/client";
import { OrdersRepository } from "@/repositories/orders-repository";

interface OrderUseCaseRequest {
  userId: string;
}

interface OrderUseCaseResponse {
  order: Order;
}

export class OrderUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({
    userId,
  }: OrderUseCaseRequest): Promise<OrderUseCaseResponse> {
    const order = await this.ordersRepository.create({
      user_id: userId,
    });

    return {
      order,
    };
  }
}
