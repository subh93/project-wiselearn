import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import User, { UserDocument } from "../models/organization";

export const createOrgService = (input: DocumentDefinition<UserDocument>) => {
    return User.create(input);
}

export const findOrgService = (query: FilterQuery<UserDocument>, options: QueryOptions = { learn:true }) => {
    return User.find(query, {}, options);
}

export const findAndUpdateOrgService = (query: FilterQuery<UserDocument>, update: UpdateQuery<UserDocument>, options: QueryOptions = { learn:true }) =>{
    return User.findOneAndUpdate(query, update, options);
}

export const deleteOrgService = (query: FilterQuery<UserDocument>) =>{
    return User.deleteOne(query);
}