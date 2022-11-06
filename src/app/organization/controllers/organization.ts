import { Request, Response } from "express";
import { validate } from 'class-validator';
import { errorResponse,noContentResponse,successResponse, successResponseArr } from "../../../utils/response-object";
import { createOrgService, deleteOrgService, findAndUpdateOrgService, findOrgService } from "../services/organization";
import { createOrgValidator, deleteOrgValidator, updateOrgValidator } from "../validator/organization";


const createorg = async(req:Request, res:Response) => {
    const { orgID, orgname, address, estyear, orgowner } = req.body;
    const createVal = new createOrgValidator();
    createVal.orgID = orgID;
    createVal.orgname = orgname;
    createVal.address = address;
    createVal.estyear = estyear;
    createVal.orgowner = orgowner;
    validate(createVal).then(async(errors:any)=>{
        if (errors.length > 0) {
          errorResponse(res, errors);
        } else {
          await createOrgService({
            orgID: orgID,
            orgname: orgname,
            address: address,
            estyear: estyear,
            orgowner: orgowner
          }).then((org) => {
            if (!org) {
              noContentResponse(res, org, `No organization created`);
            } else {
              successResponse(res, org, 'Organization created successfully');
            }
          }).catch((error) => {
            errorResponse(res, error)
          })
        }
      })
    console.log('create organization');
}
const deleteorg = async(req:Request, res:Response) => {
    const { orgID } = req.body;
    const delVal = new deleteOrgValidator();
    delVal.orgID = orgID;
    validate(delVal).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await deleteOrgService({
          orgID: orgID
        }).then((org) => {
          if (org.deletedCount == 0) {
            noContentResponse(res, org, `No organization deleted`);
          } else {
            successResponse(res, org, 'Organization deleted successfully');
          }
        }).catch((error) => {
          errorResponse(res, error)
        })
      }
    }) 
    console.log('delete user');
}
const updateorg = async(req:Request, res:Response) => {
    const { orgID, orgname, address, estyear, orgowner } = req.body;
    const updateVal = new updateOrgValidator();
    updateVal.orgID = orgID;
    updateVal.orgname = orgname;
    updateVal.address = address;
    updateVal.estyear = estyear;
    updateVal.orgowner = orgowner;
    validate(updateVal).then(async(errors:any)=>{
      if (errors.length > 0) {
        errorResponse(res, errors);
      } else {
        await findAndUpdateOrgService({
          orgID: orgID
        }, {
            orgname: orgname,
            address: address,
            estyear: estyear,
            orgowner: orgowner
        }).then((org) => {
          if (!org) {
            noContentResponse(res, org, `No organization updated`);
          } else {
            successResponse(res, org, 'Organization updated successfully');
          }
        }).catch((error) => {
          errorResponse(res, error)
        })
      }
    })
    console.log('update user');
}
const org = async (req: Request, res: Response) => { 
    const totalDataCount = await findOrgService({}).count();
  await findOrgService({}).then(async(data) => {
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

const orgId = () => { console.log('Please check the output on API TESTING TOOLS'); }

export { createorg, deleteorg, updateorg, org, orgId }