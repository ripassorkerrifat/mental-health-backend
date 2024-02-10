"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = require("./app/middleware/globalErrorHandler");
const routes_1 = __importDefault(require("./app/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
// app.use((req, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//    res.setHeader('Access-Control-Allow-Methods', '*');
//    res.setHeader('Access-Control-Allow-Headers', '*');
//    res.setHeader('Access-Control-Allow-Credentials', 'true');
//    next();
// });
// cors
app.use((0, cors_1.default)());
// cockie perser
app.use((0, cookie_parser_1.default)());
// body perser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// use routes
app.use('/api/v1', routes_1.default);
// globalErrorHandler
app.use(globalErrorHandler_1.globalErrorHandler);
app.get('/', (req, res) => {
    res.send(`Server is running at 5000 port`);
});
//handle not found
app.use((req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
    next();
});
exports.default = app;
