import { IsString, IsNotEmpty, IsDefined } from "class-validator";

export class createStudentValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    rollnumber!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    std!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    collage_name!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    course_name!:string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    subjectID!: string;
}

export class updateStudentValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    rollnumber!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    std!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    collage_name!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    course_name!:string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    subjectID!: string;
}

export class deleteStudentValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userID!: string;
}