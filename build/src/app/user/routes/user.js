"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
router.post('/create-user', user_1.createuser);
router.delete('/delete-user', user_1.deleteuser);
router.put('/update-user', user_1.updateuser);
router.get('/user', user_1.users);
router.get('/user/:id', user_1.userById);
exports.default = router;
