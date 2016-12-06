import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {CommonService} from "./common.service";
import {User} from "../model/User.model";
@Injectable()
export class UserService extends CommonService{
    constructor(http: Http, router: Router) {
        super(http, router);
    }


    // create
    public createUser(user: User): Promise<User> {
        return this.postApi("/userCreate/", user)
            .then((data) => {
                return data;
            });
    }
    // update
    public updateUser(user: User): Promise<User> {
        return this.postApi("/userUpdate/", user)
            .then((data) => {
                return data;
            });
    }
    // delete
    public deleteUser(username): Promise<User> {
        return this.getApi("/userDelete/" + username)
            .then((data)=> {
                return data;
            }, (err)=> {
                return undefined;
            });
    }

    // find all user
    public findAllUser(): Promise<User> {
        return this.getApi("/userFindAll/")
            .then((data)=> {
                return data;
            }, (err)=> {
                return undefined;
            });
    }
    // find user

}