import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {User} from "../model/User.model";
import {Injectable} from "@angular/core";
import {UserService} from "../service/User.service";

@Injectable()
export class UserResolve implements Resolve<User>{
    constructor(private userService: UserService, private router: Router){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Array<User>>{
        return this.userService.findAllUser()
            .then(data => {
                if (!data) {
                    this.router.navigate(["/error"]);
                    return;
                }
                return data;
            });
    }

}