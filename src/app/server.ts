import { Server } from "http"
import app from "./app"

const PORT = 5000

let server: Server

async function bootstrap(){
   server= app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
}

bootstrap()


  

//   app.lithen will be in server side