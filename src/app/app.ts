

import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000




// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname)
  next()
}

// parser
app.use(express.json())
app.use(express.text())
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World12!')
// })

const userRouter = express.Router()
const courseRouter = express.Router()
// need to define where need to use router
app.use("/", userRouter)
// both are work same way
app.use("/api/v1/courses", courseRouter)
userRouter.post('/api/v1/users/create-user', (req: Request, res: Response) => {
  const user = req.body
  console.log(user);
  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  })
})


courseRouter.post('/create-course', (req: Request, res: Response) => {
   const course=req.body;
   console.log(course);
   
  res.json({
   
    success: true,
    message: "User is created successfully",
    data: course,
  })
})

// req.params
// Id finding
// app.get('/:userId/:subId', (req: Request, res: Response) => {
//   console.log(req.params);

//   res.send('Hello World12!')
// })

// req.query
// email finding
app.get("/", logger, async (req: Request, res: Response,next:NextFunction) => {
  try {
    res.send(something);
  } catch (error) {
    console.log(error);
    next(error)
    // res.status(400).json({
    //   success: false,
    //   message: "failed to get data from server",
    // });
  }
});


// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
if(error){
  res.status(400).json({
    success: false,
    message: "Somthing Went wrongr",
  });
}


})




app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found",
  })
})


app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('got data')
})

export default app
