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
import {ContentComponent} from "./view/content/content.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.router";
@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        //config router url
        RouterModule.forRoot(routes, { useHash: false })
    ],
    declarations: [

        IndexPage,
        AppComponent,
        /*Component Page*/
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        /*Component View*/
        UserPage,
    ],
    providers: [
        UserService],
    bootstrap: [AppComponent],
})
export class AppModule {
}