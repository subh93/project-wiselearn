import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import User, { SubjectDocument } from "../models/subject";

export const createSubjectService = (input: DocumentDefinition<SubjectDocument>) => {
    return User.create(input);
}

export const findSubjectService = (query: FilterQuery<SubjectDocument>, options: QueryOptions = { learn:true }) => {
    return User.find(query, {}, options);
}

export const findAndUpdateSubjectService = (query: FilterQuery<SubjectDocument>, update: UpdateQuery<SubjectDocument>, options: QueryOptions = { learn:true }) =>{
    return User.findOneAndUpdate(query, update, options);
    // return User.findOneAndDelete(query, update);
}

export const deleteSubjectService = (query: FilterQuery<SubjectDocument>) =>{
    return User.deleteOne(query);
}