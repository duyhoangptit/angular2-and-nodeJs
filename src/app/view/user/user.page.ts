import {Component, OnInit} from "@angular/core";
import {UserService} from "../../service/User.service";

@Component({
    templateUrl: 'user.page.html',
    providers: [UserService]
})

export class UserPage implements OnInit {
    ngOnInit(): void {
    }

}