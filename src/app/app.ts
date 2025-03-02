
import { log } from 'console'
import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000




// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
console.log(req.url,req.method,req.hostname)
next()
}

// parser
app.use(express.json())
app.use(express.text())
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World12!')
// })

const userRouter = express.Router()
userRouter.get('/api/v1/users', (req: Request, res: Response) => {
  const user=req.body
  console.log(user);
}

// req.params
// Id finding
// app.get('/:userId/:subId', (req: Request, res: Response) => {
//   console.log(req.params);
  
//   res.send('Hello World12!')
// })

// req.query
// email finding
app.get('/',logger, (req: Request, res: Response) => {

  
  res.send('Hello World12!')
})


app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('got data')
})

export default app
