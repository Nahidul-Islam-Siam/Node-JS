"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
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
app.get('/', (req, res) => {
    console.log(req.query);
    res.send('Hello World12!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('got data');
});
exports.default = app;
