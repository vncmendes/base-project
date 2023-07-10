import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { appRoutes } from './http/routes'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false
  },
  sign: {
    expiresIn: '10m'
  }
})

app.register(fastifyCookie)

app.register(appRoutes)

app.setErrorHandler((error, _request, reply) => { // underline no lugar de um parametro que não foi usado, no caso o request.
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }
  if (env.NODE_ENV !== 'production') {
    console.error(error);
  } else {
    // TODO: Here we should log to an external tool like DataDog/NewRelic/Sentry to manager de errors.
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})










// app.post('/users', async (request, reply) => {
//   const registerBodySchema = z.object({
//     name: z.string(),
//     email: z.string().email(),
//     password: z.string().min(6)
//   })
//   const { name, email, password } = registerBodySchema.parse(request.body)

//   await prisma.user.create({
//     data: {
//       name,
//       email,
//       password_hash: password
//     }
//   })
//   return reply.status(201).send()
// })