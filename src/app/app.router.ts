import {Routes} from "@angular/router";
import {UserPage} from "./view/page/user/user.page";
import {IndexPage} from "./view/index/index.page";
import {ContentComponent} from "./view/content/content.component";
import {UserResolve} from "./resolve/User.resolve";
import {UserService} from "./service/User.service";
import {PaginatorPage} from "./view/page/pagination/paginator.page";
import {TemplatePage} from "./view/page/template/template.page";

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
            },
            {
                path: 'pagination',
                component: PaginatorPage,
            },
            {
                path: 'pagination',
                component: PaginatorPage,
            },
            {
                path: 'template',
                component: TemplatePage,
            }
        ]
    }
];

export const routingProviders: any[] = [UserResolve, UserService];

