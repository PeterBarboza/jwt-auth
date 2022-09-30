import { connect } from "mongoose"
import "dotenv/config"

const host = process.env.DB_HOST || "localhost"

const uri = `mongodb://${host}`

console.log(uri)

async function connectToMongoDB() {
  connect(uri, { autoCreate: true, dbName: "jwt-auth" })
    .then(() => {
      console.log("Successfully connected to MongoDB")
    })
    .catch((error) => {
      console.log(error)
    })
}

export { connectToMongoDB }
