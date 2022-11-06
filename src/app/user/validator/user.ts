import { IsString, IsNotEmpty, IsDefined, IsEmail, IsPhoneNumber, IsMongoId } from "class-validator";

export class createUserValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    firstname!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    lastname!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsEmail()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsPhoneNumber()
    phone!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    password!:string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userStatus!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userType!: string;

    @IsString()
    // @IsNotEmpty()
    @IsDefined()
    address!: string;

    @IsString()
    // @IsNotEmpty()
    @IsDefined()
    nationality!: string;

    @IsString()
    // @IsNotEmpty()
    @IsDefined()
    dob!: string;

    @IsString()
    // @IsNotEmpty()
    @IsDefined()
    gender!: string;
}

export class updateUserValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsMongoId()
    userID!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    firstname!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    lastname!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsEmail()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsPhoneNumber()
    phone!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    password!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userStatus!: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userType!: string;

    @IsString()
    // @IsNotEmpty()
    @IsDefined()
    address!: string;

    @IsString()
    // @IsNotEmpty()
    @IsDefined()
    nationality!: string;

    @IsString()
    // @IsNotEmpty()
    @IsDefined()
    dob!: string;

    @IsString()
    // @IsNotEmpty()
    @IsDefined()
    gender!: string;
}

export class deleteUserValidator{
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userID!: string;
}