
import { log } from 'console'
import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000

const logger = (req: Request, res: Response, next: NextFunction) => {
console.log(req.url,req.method,req.hostname)
}

// parser
app.use(express.json())
app.use(express.text())
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World12!')
// })


// req.params
// Id finding
// app.get('/:userId/:subId', (req: Request, res: Response) => {
//   console.log(req.params);
  
//   res.send('Hello World12!')
// })

// req.query
// email finding
app.get('/',logger, (req: Request, res: Response) => {
  console.log(req.query);
  
  res.send('Hello World12!')
})


app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('got data')
})

export default app
