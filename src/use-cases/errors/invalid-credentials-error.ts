export class InvalidCredentiaisError extends Error {
  constructor() {
    super('Invalid credentials.')
  }
}