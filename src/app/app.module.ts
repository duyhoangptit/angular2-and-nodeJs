
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {UserPage} from "./view/user/user.page";
import {AppComponent} from "./app.component";
import {UserService} from "./service/User.service";
@NgModule({

    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
    ],
    declarations:[
        UserPage
    ],
    bootstrap: [AppComponent],
    providers:[
        UserService
    ]
})
export class AppModule {
}