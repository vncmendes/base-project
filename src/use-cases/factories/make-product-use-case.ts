import { PrismaProductsRepository } from "@/repositories/prisma/prisma-product-repository";
import { ProductUseCase } from "../product";

export function makeProductUseCase() {
  const productRepository = new PrismaProductsRepository();
  const productUseCase = new ProductUseCase(productRepository);

  return productUseCase;
}
