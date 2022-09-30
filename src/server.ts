import { app, port } from "./app"
import { connectToMongoDB } from "./database"

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`)

  await connectToMongoDB()
})
