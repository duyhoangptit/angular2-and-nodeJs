import {Routes, RouterModule} from "@angular/router";
import {UserPage} from "./view/page/user/user.page";
import {IndexPage} from "./view/index/index.page";
import {ContentComponent} from "./view/content/content.component";
import {UserResolve} from "./resolve/User.resolve";
import {UserService} from "./service/User.service";

export const routes: Routes = [
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
                component: UserPage,
                resolve: {users :UserResolve},
            }
        ]
    }
];

export const routingProviders: any[] = [UserResolve, UserService];

