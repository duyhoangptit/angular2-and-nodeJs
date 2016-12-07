import {OnInit, Component} from "@angular/core";
import {UserService} from "../../../service/User.service";

@Component({
    templateUrl: './paginator.page.html',
    providers: [UserService]
})

export class PaginatorPage implements OnInit {

    collection = [];
    constructor() {
        for (let i = 1; i <= 100; i++) {
            this.collection.push(`item ${i}`);
        }
    }
    ngOnInit(): void {
    }

    public pageChanged(event){

    }

}