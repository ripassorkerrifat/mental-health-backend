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
exports.UserServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_codes_1 = require("http-status-codes");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const user_model_1 = require("./user.model");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.create(payload);
    return result;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findById(id);
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.find();
});
const createChatMsg = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_model_1.User.findById(id);
    if (!userExist) {
        throw new ApiError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found');
    }
    yield user_model_1.User.findByIdAndUpdate(id, { $push: { chat: payload.data } }, { new: true });
    yield userExist.save();
    return userExist;
});
const clearChatMsg = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_model_1.User.findById(id);
    if (!userExist) {
        throw new ApiError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found');
    }
    userExist.chat = [];
    yield userExist.save();
    return userExist;
});
exports.UserServices = {
    createUser,
    getSingleUser,
    getAllUsers,
    createChatMsg,
    clearChatMsg,
};
