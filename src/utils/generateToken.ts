import { sign } from "jsonwebtoken"
import "dotenv/config"

export function generateToken(_id: string) {
  const secret = process.env.SECRET

  const token = sign({ _id: _id }, secret, {
    expiresIn: 86400
  })

  return token
}
