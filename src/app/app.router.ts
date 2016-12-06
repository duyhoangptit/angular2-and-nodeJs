import {Routes, RouterModule} from "@angular/router";
import {UserPage} from "./view/user/user.page";
import {NgModule} from '@angular/core';
import {IndexPage} from "./view/index/index.page";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'

    },
    {
        path: 'home',
        component: IndexPage,
        children: [
            {
                path: '',
                component: IndexPage,
            },
            {
                path: 'user',
                component: UserPage,
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
