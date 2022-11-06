import { IsString, IsNotEmpty, IsDefined } from "class-validator";

export class createOrgValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgname!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    address!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    estyear!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgowner!: string;
}

export class updateOrgValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgname!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    address!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    estyear!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgowner!: string;
}

export class deleteOrgValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    orgID!: string;
}