import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {IndexPage} from "./view/index/index.page";
import {HeaderComponent} from "./view/header/header.component.ts";
import {FooterComponent} from "./view/footer/footer.component.ts";
import {ContentComponent} from "./view/content/content.component";
import {RouterModule} from "@angular/router";
import {routes, routingProviders} from "./app.router";
import {UserPage} from "./view/page/user/user.page";
import {PaginatorPage} from "./view/page/pagination/paginator.page";
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
        PaginatorPage
    ],
    providers: [routingProviders],
    bootstrap: [AppComponent],
})
export class AppModule {
}