import { Order } from "@prisma/client";
import { OrdersRepository } from "@/repositories/orders-repository";

interface OrderUseCaseRequest {
  productName: string;
  productAmount: string;
  userId: string;
}

interface OrderUseCaseResponse {
  order: Order;
}

export class OrderUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({
    productName,
    productAmount,
    userId,
  }: OrderUseCaseRequest): Promise<OrderUseCaseResponse> {
    const order = await this.ordersRepository.create({
      product_name: productName,
      product_amount: productAmount,
      user_id: userId,
    });
    console.log(order);

    return {
      order,
    };
  }
}
