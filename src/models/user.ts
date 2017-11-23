export interface User {
    id:number;
    fullName: string;
    email: string;
    password: string;
    groupId:number;
    groupName:string;
    qrId:number;
    qrName:string;
    permission:number;
    gender:number;
    role:number;
    avatar:string;
    birthday:Date;
    paypalEmail:string;
    paypalPassword:string;
    paypalVerifyState:number;
}
