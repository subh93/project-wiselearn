import { IsString, IsNotEmpty, IsDefined } from "class-validator";

export class createAttendenceValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    attendence_status!: string;
}

export class updateAttendenceValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    attendence_status!: string;
}

export class deleteAttendenceValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userID!: string;
}