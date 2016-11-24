import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {UserPage} from "./view/user/user.page";
import {AppComponent} from "./app.component";
import {UserService} from "./service/User.service";
import {IndexPage} from "./view/index/index.page";
import {HeaderComponent} from "./view/header/header.component.ts";
import {FooterComponent} from "./view/footer/footer.component.ts";
import {AppRoutingModule} from "./app.router";
@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        /*Component Page*/
        HeaderComponent,
        FooterComponent,
        IndexPage,
        /*Component View*/
        UserPage,
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}