import {Routes, RouterModule} from "@angular/router";
import {UserPage} from "./view/user/user.page";
import {NgModule} from '@angular/core';
import {IndexPage} from "./view/index/index.page";
import {ContentComponent} from "./view/content/content.component";
import {UserResolve} from "./resolve/User.resolve";
import {UserService} from "./service/User.service";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'

    }, {
        path: 'home',
        component: IndexPage,
        children: [
            {
                path: '',
                component: ContentComponent,
            },
            {
                path: 'user',
                component: UserPage
                // ,
                // resolve: {users :UserResolve},
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
