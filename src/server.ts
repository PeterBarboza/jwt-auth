import { app, port } from "./app"
import { connectToMongoDB } from "./database"

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)

  connectToMongoDB()
})