import { Request, Response } from "express";
import { validate } from 'class-validator';
import { createSubjectValidator, deleteSubjectValidator, updateSubjectValidator } from "../validator/subject";
import { errorResponse,noContentResponse,successResponse, successResponseArr } from "../../../utils/response-object";
import { createSubjectService, deleteSubjectService, findAndUpdateSubjectService, findSubjectService } from "../services/subject";

const createsubject = async(req:Request, res:Response) => {
    const { subjectID, subjectname } = req.body;
    const createVal = new createSubjectValidator();
    createVal.subjectID = subjectID;
    createVal.subjectname = subjectname;
    validate(createVal).then(async(errors:any)=>{
        if (errors.length > 0) {
          errorResponse(res, errors);
        } else {
          await createSubjectService({
            subjectID: subjectID,
            subjectname: subjectname
          }).then((user) => {
            if (!user) {
              noContentResponse(res, user, `No subject created`);
            } else {
              successResponse(res, user, 'Subject created successfully');
            }
          }).catch((error) => {
            errorResponse(res, error)
          })
        }
      })
    console.log('create subject');
}
const deletesubject = async(req:Request, res:Response) => {
    const { subjectID } = req.body;
    const delval = new deleteSubjectValidator();
    delval.subjectID = subjectID;
    validate(delval).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await deleteSubjectService({
          subjectID: subjectID
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
const updatesubject = async(req:Request, res:Response) => {
    const { subjectID, subjectname } = req.body;
    const updateval = new updateSubjectValidator();
    updateval.subjectID = subjectID;
    updateval.subjectname = subjectname;
    validate(updateval).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await findAndUpdateSubjectService({
          subjectID: subjectID
        }, {
          subjectID: subjectID,
          subjectname: subjectname
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
const subjects = async (req: Request, res: Response) => { 
    const totalDataCount = await findSubjectService({}).count();
  await findSubjectService({}).then(async (data) => {
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

const subjectById = () => { console.log('Please check the output on API TESTING TOOLS'); }

export { createsubject, deletesubject, updatesubject, subjects, subjectById }