import { Request, Response } from "express";
import { validate } from 'class-validator';
import { createAttendenceValidator, deleteAttendenceValidator, updateAttendenceValidator } from "../validator/attendence";
import { errorResponse,noContentResponse,successResponse, successResponseArr } from "../../../utils/response-object";
import { createAttendenceService, deleteAttendenceService, findAndUpdateAttendenceService, findAttendenceService } from "../services/attendence";

const createattendence = async(req:Request, res:Response) => {
    const { userID, attendence_status } = req.body;
    const createVal = new createAttendenceValidator();
    createVal.userID = userID;
    createVal.attendence_status = attendence_status;
    validate(createVal).then(async(errors:any)=>{
        if (errors.length > 0) {
          errorResponse(res, errors);
        } else {
          await createAttendenceService({
            userID: userID,
            attendence_status: attendence_status
          }).then((user) => {
            if (!user) {
              noContentResponse(res, user, `No attendence marked`);
            } else {
              successResponse(res, user, 'Attendence marked successfully');
            }
          }).catch((error) => {
            errorResponse(res, error)
          })
        }
      })
    console.log('create user');
}
const deleteattendence = async(req:Request, res:Response) => {
    const { userID } = req.body;
    const delval = new deleteAttendenceValidator();
    delval.userID = userID;
    validate(delval).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await deleteAttendenceService({
          userID: userID
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
const updateattendence = async(req:Request, res:Response) => {
    const { userID, attendence_status } = req.body;
    const updateval = new updateAttendenceValidator();
    updateval.userID = userID;
    updateval.attendence_status = attendence_status;
    validate(updateval).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await findAndUpdateAttendenceService({
          userID: userID
        }, {
          userID: userID,
          attendence_status: attendence_status
        }).then((user) => {
          if (!user) {
            noContentResponse(res, user, `No attendence updated`);
          } else {
            successResponse(res, user, 'Attendence updated successfully');
          }
        }).catch((error) => {
          errorResponse(res, error)
        })
      }
    })
    console.log('update user');
}
const attendences = async (req: Request, res: Response) => { 
    const totalDataCount = await findAttendenceService({}).count();
  await findAttendenceService({}).then(async (data) => {
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

const attendenceById = () => { console.log('Please check the output on API TESTING TOOLS'); }

export { createattendence, deleteattendence, updateattendence, attendences, attendenceById }