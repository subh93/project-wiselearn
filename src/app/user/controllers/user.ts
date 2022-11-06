import { Request, Response } from "express";
import { validate } from 'class-validator';
import { createUserValidator, deleteUserValidator, updateUserValidator } from "../validator/user";
import { errorResponse,noContentResponse,successResponse, successResponseArr } from "../../../utils/response-object";
import { createUserService, deleteUserService, findAndUpdateUserService, findUserService } from "../services/user";
// import { errorResponse, successResponse } from "../utils/response-object";

const createuser = async(req:Request, res:Response) => {
    const { firstname, lastname, email, phone, password, userStatus, userType, address, nationality, dob, gender } = req.body;
    const createVal = new createUserValidator();
    createVal.firstname = firstname;
    createVal.lastname = lastname;
    createVal.email = email;
    createVal.phone = phone;
    createVal.password = password;
    createVal.userStatus = userStatus;
    createVal.userType = userType;
    createVal.address = address;
    createVal.nationality = nationality;
    createVal.dob = dob;
    createVal.gender = gender;
    validate(createVal).then(async(errors:any)=>{
        if (errors.length > 0) {
          errorResponse(res, errors);
        } else {
          await createUserService({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            password: password,
            userStatus: userStatus,
            userType: userType,
            address: address,
            nationality: nationality,
            dob: dob,
            gender: gender
          }).then((user) => {
            if (!user) {
              noContentResponse(res, user, `No user created`);
            } else {
              successResponse(res, user, 'User created successfully');
            }
          }).catch((error) => {
            errorResponse(res, error)
          })
        }
      })
    console.log('create user');
}
const deleteuser = async(req:Request, res:Response) => {
    const { userID } = req.body;
    const delVal = new deleteUserValidator();
    delVal.userID = userID;
    validate(delVal).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await deleteUserService({
          _id: userID
        }).then((data) => {
          if (data.deletedCount == 0) {
            noContentResponse(res, data, `No user deleted`);
          } else {
            successResponse(res, data, 'User deleted successfully');
          }
        }).catch((error) => {
          errorResponse(res, error)
        })
      }
    }) 
    console.log('delete user');
}
const updateuser = async(req:Request, res:Response) => {
    const { userID, firstname, lastname, email, phone, password, userStatus, userType, address, nationality, dob, gender } = req.body;
    const updateVal = new updateUserValidator();
    updateVal.userID = userID;
    updateVal.firstname = firstname;
    updateVal.lastname = lastname;
    updateVal.email = email;
    updateVal.phone = phone;
    updateVal.password = password;
    updateVal.userStatus = userStatus;
    updateVal.userType = userType;
    updateVal.address = address;
    updateVal.nationality = nationality;
    updateVal.dob = dob;
    updateVal.gender = gender;
    validate(updateVal).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await findAndUpdateUserService({
          _id: userID
        }, {
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
          password: password,
          userStatus: userStatus,
          userType: userType,
          address: address,
          nationality: nationality,
          dob: dob,
          gender: gender
        }).then((user) => {
          if (!user) {
            noContentResponse(res, user, `No user updated`);
          } else {
            successResponse(res, user, 'User updated successfully');
          }
        }).catch((error) => {
          errorResponse(res, error)
        })
      }
    })
    console.log('update user');
}
const users = async (req: Request, res: Response) => { 
    const totalDataCount = await findUserService({}).count();
  await findUserService({}).then(async (data) => {
    if (data.length == 0) {
      noContentResponse(res, data, `No user found`);
    } else {
      successResponseArr(res, data, {
        total: totalDataCount
      }, 'User fetch successfully');
    }
  }).catch((error) => {
    errorResponse(res, error)
  })
    console.log('Please check the output on API TESTING TOOLS');
}

const userById = () => { console.log('Please check the output on API TESTING TOOLS'); }

export { createuser, deleteuser, updateuser, users, userById }