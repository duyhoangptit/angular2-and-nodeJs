import {BaseModel} from "./Base.model";

export class User extends BaseModel{
    /* username */
    public username: string;
    /* password */
    public password: string;
    /* enable */
    public enable: boolean;
    /* email */
    public email: string;

}
