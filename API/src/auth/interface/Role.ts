export enum Role{
    Admin = 'admin',
    Geran= 'geran',
    User = 'user'
}

type User = {
    id:number;
    userName:string;
    password:string;
    role:Role;
}

export interface IAuthenticate {
    user:User;
    token:string;
}