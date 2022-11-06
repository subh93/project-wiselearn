import { Request, Response } from "express";
import { validate } from 'class-validator';
import { createTeacherValidator, deleteTeacherValidator, updateTeacherValidator } from "../validator/teacher";
import { errorResponse,noContentResponse,successResponse, successResponseArr } from "../../../utils/response-object";
import { createTeacherService, deleteTeacherService, findAndUpdateTeacherService, findTeacherService } from "../services/teacher";

const createteacher = async(req:Request, res:Response) => {
    const { userID, subjectID, orgID, batch, specialization } = req.body;
    const createVal = new createTeacherValidator();
    createVal.userID = userID;
    createVal.subjectID = subjectID;
    createVal.orgID = orgID;
    createVal.batch = batch;
    createVal.specialization = specialization;
    validate(createVal).then(async(errors:any)=>{
        if (errors.length > 0) {
          errorResponse(res, errors);
        } else {
          await createTeacherService({
            userID: userID,
            subjectID: subjectID,
            orgID: orgID,
            batch: batch,
            specialization: specialization
          }).then((teacher) => {
            if (!teacher) {
              noContentResponse(res, teacher, `No teacher created`);
            } else {
              successResponse(res, teacher, 'Teacher created successfully');
            }
          }).catch((error) => {
            errorResponse(res, error)
          })
        }
      })
    console.log('create user');
}
const deleteteacher = async(req:Request, res:Response) => {
    const { userID } = req.body;
    const delval = new deleteTeacherValidator();
    delval.userID = userID;
    validate(delval).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await deleteTeacherService({
          userID: userID
        }).then((data) => {
          if (data.deletedCount == 0) {
            noContentResponse(res, data, `No teacher deleted`);
          } else {
            successResponse(res, data, 'Teacher deleted successfully');
          }
        }).catch((error) => {
          errorResponse(res, error)
        })
      }
    }) 
    console.log('delete user');
}
const updateteacher = async(req:Request, res:Response) => {
    const { userID, subjectID, orgID, batch, specialization } = req.body;
    const updateval = new updateTeacherValidator();
    updateval.userID = userID;
    updateval.userID = userID;
    updateval.subjectID = subjectID;
    updateval.orgID = orgID;
    updateval.batch = batch;
    updateval.specialization = specialization;
    validate(updateval).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await findAndUpdateTeacherService({
          userID: userID
        }, {
          userID: userID,
          subjectID: subjectID,
          orgID: orgID,
          batch: batch,
          specialization: specialization
        }).then((teacher) => {
          if (!teacher) {
            noContentResponse(res, teacher, `No teacher updated`);
          } else {
            successResponse(res, teacher, 'Teacher updated successfully');
          }
        }).catch((error) => {
          errorResponse(res, error)
        })
      }
    })
    console.log('update user');
}
const teachers = async (req: Request, res: Response) => { 
    const totalDataCount = await findTeacherService({}).count();
  await findTeacherService({}).then(async (data) => {
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

const teacherById = () => { console.log('Please check the output on API TESTING TOOLS'); }

export { createteacher, deleteteacher, updateteacher, teachers, teacherById }