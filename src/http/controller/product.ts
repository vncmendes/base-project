import { makeProductUseCase } from "@/use-cases/factories/make-product-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createProduct(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const productBodySchema = z.object({
    name: z.string(),
    amount: z.string(),
    value: z.string(),
    description: z.string(),
  });

  const { name, amount, value, description } = productBodySchema.parse(
    request.body
  );

  try {
    const productUseCase = makeProductUseCase();

    productUseCase.execute({
      name,
      amount,
      value,
      description,
    });
  } catch (err) {
    if (err) {
      return reply.status(400).send("Resource not found.");
    }
  }
}
