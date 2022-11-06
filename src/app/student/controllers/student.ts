import { Request, Response } from "express";
import { validate } from 'class-validator';
import { createStudentValidator, deleteStudentValidator, updateStudentValidator } from "../validator/student";
import { errorResponse,noContentResponse,successResponse, successResponseArr } from "../../../utils/response-object";
import { createStudentService, deleteStudentService, findAndUpdateStudentService, findStudentService } from "../services/student";

const createstudent = async(req:Request, res:Response) => {
    const { userID, rollnumber, std, collage_name, course_name, subjectID } = req.body;
    const createVal = new createStudentValidator();
    createVal.userID = userID;
    createVal.rollnumber = rollnumber;
    createVal.std = std;
    createVal.collage_name = collage_name;
    createVal.course_name = course_name;
    createVal.subjectID = subjectID;
    validate(createVal).then(async(errors:any)=>{
        if (errors.length > 0) {
          errorResponse(res, errors);
        } else {
          await createStudentService({
            userID: userID,
            rollnumber: rollnumber,
            std: std,
            collage_name: collage_name,
            course_name: course_name,
            subjectID: subjectID
          }).then((student) => {
            if (!student) {
              noContentResponse(res, student, `No student created`);
            } else {
              successResponse(res, student, 'Student created successfully');
            }
          }).catch((error) => {
            errorResponse(res, error)
          })
        }
      })
    console.log('create user');
}
const deletestudent = async(req:Request, res:Response) => {
    const { userID } = req.body;
    const delval = new deleteStudentValidator();
    delval.userID = userID;
    validate(delval).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await deleteStudentService({
          userID: userID
        }).then((data) => {
          if (data.deletedCount == 0) {
            noContentResponse(res, data, `No student deleted`);
          } else {
            successResponse(res, data, 'Student deleted successfully');
          }
        }).catch((error) => {
          errorResponse(res, error)
        })
      }
    }) 
    console.log('delete user');
}
const updatestudent = async(req:Request, res:Response) => {
    const { userID, rollnumber, std, collage_name, course_name, subjectID } = req.body;
    const updateval = new updateStudentValidator();
    updateval.userID = userID;
    updateval.userID = userID;
    updateval.rollnumber = rollnumber;
    updateval.std = std;
    updateval.collage_name = collage_name;
    updateval.course_name = course_name;
    updateval.subjectID = subjectID;
    validate(updateval).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await findAndUpdateStudentService({
          userID: userID
        }, {
          userID: userID,
          rollnumber: rollnumber,
          std: std,
          collage_name: collage_name,
          course_name: course_name,
          subjectID: subjectID
        }).then((student) => {
          if (!student) {
            noContentResponse(res, student, `No student updated`);
          } else {
            successResponse(res, student, 'Student updated successfully');
          }
        }).catch((error) => {
          errorResponse(res, error)
        })
      }
    })
    console.log('update user');
}
const students = async (req: Request, res: Response) => { 
    const totalDataCount = await findStudentService({}).count();
  await findStudentService({}).then(async (data) => {
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

const studentById = () => { console.log('Please check the output on API TESTING TOOLS'); }

export { createstudent, deletestudent, updatestudent, students, studentById }