import { IsString, IsNotEmpty, IsDefined } from "class-validator";

export class createTeacherValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    subjectID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    batch!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    specialization!:string;
}

export class updateTeacherValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    subjectID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    batch!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    specialization!:string;
}

export class deleteTeacherValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userID!: string;
}