import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import User, { TeacherDocument } from "../models/teacher";

export const createTeacherService = (input: DocumentDefinition<TeacherDocument>) => {
    return User.create(input);
}

export const findTeacherService = (query: FilterQuery<TeacherDocument>, options: QueryOptions = { learn:true }) => {
    return User.find(query, {}, options);
}

export const findAndUpdateTeacherService = (query: FilterQuery<TeacherDocument>, update: UpdateQuery<TeacherDocument>, options: QueryOptions = { learn:true }) =>{
    return User.findOneAndUpdate(query, update, options);
}

export const deleteTeacherService = (query: FilterQuery<TeacherDocument>) =>{
    return User.deleteOne(query);
}