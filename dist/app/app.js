"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        next(error);
        // res.status(400).json({
        //   success: false,
        //   message: "failed to get data from server",
        // });
    }
}));
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Somthing Went wrongr",
        });
    }
});
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found",
    });
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('got data');
});
exports.default = app;
