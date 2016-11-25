import {Component, OnInit} from "@angular/core";
import {UserService} from "../../service/User.service";
import {User} from "../../model/User.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    templateUrl: './user.page.html',
    providers: [UserService]
})

export class UserPage implements OnInit {
    /*list user*/
    users: User [] = new Array<User>();
    /*Data modal user*/
    user: User = new User();
    btnModal: string;
    btnSubmit: string;
    title: string;

    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService){

    }
    ngOnInit(): void {
        // get data resolve call service api
        this.userService.findAllUser().then(data=>{
            this.users =data;
        }).catch();
        this.btnModal = "Create User";
        this.btnSubmit = "Submit";
    }

}