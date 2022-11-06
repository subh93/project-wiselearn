import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import User, { StudentDocument } from "../models/student";

export const createStudentService = (input: DocumentDefinition<StudentDocument>) => {
    return User.create(input);
}

export const findStudentService = (query: FilterQuery<StudentDocument>, options: QueryOptions = { learn:true }) => {
    return User.find(query, {}, options);
}

export const findAndUpdateStudentService = (query: FilterQuery<StudentDocument>, update: UpdateQuery<StudentDocument>, options: QueryOptions = { learn:true }) =>{
    return User.findOneAndUpdate(query, update, options);
}

export const deleteStudentService = (query: FilterQuery<StudentDocument>) =>{
    return User.deleteOne(query);
}