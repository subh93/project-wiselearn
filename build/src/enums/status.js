"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusMessage = exports.statusCode = void 0;
var statusCode;
(function (statusCode) {
    statusCode[statusCode["SUCCESS"] = 200] = "SUCCESS";
    statusCode[statusCode["NO_CONTENT"] = 401] = "NO_CONTENT";
    statusCode[statusCode["ERROR"] = 401] = "ERROR";
})(statusCode = exports.statusCode || (exports.statusCode = {}));
var statusMessage;
(function (statusMessage) {
    statusMessage["SUCCESS"] = "success";
    statusMessage["NO_CONTENT"] = "no data found";
    statusMessage["ERROR"] = "error";
})(statusMessage = exports.statusMessage || (exports.statusMessage = {}));
