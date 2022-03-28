import { Schema, model } from "mongoose"
import { hash } from "bcryptjs"

import { IUser } from "../types/IUser"

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

userSchema.pre("save", async function (next) {
  const safePassword = await hash(this.password, 10)

  this.password = safePassword

  next()
})

const User = model("user", userSchema)

export { User }