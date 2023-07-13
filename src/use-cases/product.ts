import { Prisma, Product } from "@prisma/client";
import { ProductsRepository } from "@/repositories/products-repository";

interface ProductUseCaseRequest {
  name: string;
  amount: number;
  value: number;
  description: string;
}

interface ProductUseCaseResponse {
  product: Product;
}

export class ProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    amount,
    value,
    description,
  }: ProductUseCaseRequest): Promise<ProductUseCaseResponse> {
    const product = await this.productsRepository.create({
      name,
      amount,
      value,
      description,
    });

    return {
      product,
    };
  }
}
