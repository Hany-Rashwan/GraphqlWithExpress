"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000 || process.env.port;
const one = 1;
const two = 2;
app.get('/', (req, res) => {
    res.send(`two + one = ${two + one}`);
});
app.listen(port);
console.log(`Server is running on port: ${port}`);
