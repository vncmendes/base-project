import { makeOrderUseCase } from "@/use-cases/factories/make-order-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function order(request: FastifyRequest, reply: FastifyReply) {
  const orderBodySchema = z.object({
    productName: z.string(),
    productAmount: z.string(),
    userId: z.string(),
  });

  const { productName, productAmount, userId } = orderBodySchema.parse(
    request.body
  );

  try {
    const orderUseCase = makeOrderUseCase();
    orderUseCase.execute({
      productName,
      productAmount,
      userId,
    });
  } catch (err) {
    if (err) {
      return reply.status(400).send("Resource not found.");
    }
  }
}
