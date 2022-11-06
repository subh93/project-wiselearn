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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userById = exports.users = exports.updateuser = exports.deleteuser = exports.createuser = void 0;
const class_validator_1 = require("class-validator");
const user_1 = require("../validator/user");
const response_object_1 = require("../../../utils/response-object");
// import { errorResponse, successResponse } from "../utils/response-object";
const createuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, email, phone, password, userStatue } = req.body;
    const createVal = new user_1.createUserValidator();
    createVal.firstname = firstname;
    createVal.lastname = lastname;
    createVal.email = email;
    createVal.phone = phone;
    createVal.password = password;
    createVal.userStatue = userStatue;
    (0, class_validator_1.validate)(createVal).then((errors) => __awaiter(void 0, void 0, void 0, function* () {
        if (errors.length > 0) {
            (0, response_object_1.errorResponse)(res, errors);
        }
        else {
            (0, response_object_1.successResponse)(res, 'User created successfully');
        }
    }));
    console.log('create user');
});
exports.createuser = createuser;
const deleteuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID } = req.body;
    const delval = new user_1.deleteUserValidator();
    delval.userID = userID;
    (0, class_validator_1.validate)(delval).then((errors) => __awaiter(void 0, void 0, void 0, function* () {
        if (errors.length > 0) {
            (0, response_object_1.errorResponse)(res, errors);
        }
        else {
            (0, response_object_1.successResponse)(res, 'User deleted successfully');
        }
    }));
    console.log('delete user');
});
exports.deleteuser = deleteuser;
const updateuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID, firstname, lastname, email, phone, password, userStatue } = req.body;
    const updateval = new user_1.updateUserValidator();
    updateval.userID = userID;
    updateval.firstname = firstname;
    updateval.lastname = lastname;
    updateval.email = email;
    updateval.phone = phone;
    updateval.password = password;
    updateval.userStatue = userStatue;
    (0, class_validator_1.validate)(updateval).then((errors) => __awaiter(void 0, void 0, void 0, function* () {
        if (errors.length > 0) {
            (0, response_object_1.errorResponse)(res, errors);
        }
        else {
            (0, response_object_1.successResponse)(res, 'User updated successfully');
        }
    }));
    console.log('update user');
});
exports.updateuser = updateuser;
const users = () => { console.log('list of users'); };
exports.users = users;
const userById = () => { console.log('list of users by ID'); };
exports.userById = userById;
