import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import User, { AttendenceDocument } from "../models/attendence";

export const createAttendenceService = (input: DocumentDefinition<AttendenceDocument>) => {
    return User.create(input);
}

export const findAttendenceService = (query: FilterQuery<AttendenceDocument>, options: QueryOptions = { learn:true }) => {
    return User.find(query, {}, options);
}

export const findAndUpdateAttendenceService = (query: FilterQuery<AttendenceDocument>, update: UpdateQuery<AttendenceDocument>, options: QueryOptions = { learn:true }) =>{
    return User.findOneAndUpdate(query, update, options);
    // return User.findOneAndDelete(query, update);
}

export const deleteAttendenceService = (query: FilterQuery<AttendenceDocument>) =>{
    return User.deleteOne(query);
}