import { FastifyInstance } from "fastify";
import { authenticate } from "./controller/authenticate";
import { register } from "./controller/register";
import { refresh } from "./controller/refresh";
import { profile } from "./controller/profile";
import { product } from "./controller/product";
import { order } from "./controller/order";
import { verifyJWT } from "./middlewares/verify-jwt";
import { verifyUserRole } from "./middlewares/verify-user-role";

export async function appRoutes(app: FastifyInstance) {
  // POST
  app.post("/users", register);
  app.post("/products", product);
  app.post("/orders", order);
  app.post("/sessions", authenticate);

  // app.post('/sessions', { onRequest: [verifyUserRole('ADMIN')] }, outraRota) // exemplo para usar verificação.

  app.patch("/token/refresh", refresh);

  // GET
  app.get("/me", { onRequest: [verifyJWT] }, profile);

  // UPDATE
  // DELETE
}
