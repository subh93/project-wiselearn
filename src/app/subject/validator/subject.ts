import { IsString, IsNotEmpty, IsDefined } from "class-validator";

export class createSubjectValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    subjectID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    subjectname!: string;
}

export class updateSubjectValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    subjectID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    subjectname!: string;
}

export class deleteSubjectValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    subjectID!: string;
}