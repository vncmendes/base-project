import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from "zod"
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { makeRegisterUseCase } from '@/use-cases/factories/make-register-use-case'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    const registerUseCase = makeRegisterUseCase()

    await registerUseCase.execute({
      name,
      email,
      password
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }
    return reply.status(500).send()
  }

  return reply.status(201).send()

}

// const { name, email, password } = registerBodySchema.parse(request.body)


  // const password_hash = await hash(password, 6)

  // const userWithSameEmail = await prisma.user.findUnique({
  //   where: {
  //     email
  //   }
  // })

  // if (userWithSameEmail) {
  //   return reply.status(409).send("User already registered !")
  // }

  // await prisma.user.create({
  //   data: {
  //     name,
  //     email,
  //     password_hash,
  //   }
  // })

  // return reply.status(201).send()