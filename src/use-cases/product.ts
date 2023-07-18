import { Product } from "@prisma/client";
import { ProductsRepository } from "@/repositories/products-repository";

interface ProductUseCaseRequest {
  name: string;
  amount: string;
  value: string;
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
    console.log(product);

    return {
      product,
    };
  }
}
