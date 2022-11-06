"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function db() {
    const dburl = process.env.DB_URL;
    (0, mongoose_1.connect)(dburl).then(data => {
        console.log("Database Connected");
    }).catch(error => {
        console.log("Error while connecting to the database", error);
    });
}
exports.default = db;
