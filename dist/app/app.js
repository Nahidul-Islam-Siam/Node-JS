"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World12!')
// })
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// need to define where need to use router
app.use("/", userRouter);
// both are work same way
app.use("/api/v1/courses", courseRouter);
userRouter.post('/api/v1/users/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User is created successfully",
        data: course,
    });
});
// req.params
// Id finding
// app.get('/:userId/:subId', (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send('Hello World12!')
// })
// req.query
// email finding
app.get('/', logger, (req, res) => {
    res.send('Hello World12!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('got data');
});
exports.default = app;
