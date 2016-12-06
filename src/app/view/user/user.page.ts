import {Component, OnInit} from "@angular/core";
import {UserService} from "../../service/User.service";
import {User} from "../../model/User.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    templateUrl: 'user.page.html',
    providers: [UserService]
})

export class UserPage implements OnInit {

    itemUser: User;
    users: User [] = new Array<User>();

    constructor(route: ActivatedRoute, router: Router, userService: UserService) {

    }

    ngOnInit(): void {
    }

}