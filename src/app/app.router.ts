import {Router, Routes, RouterModule} from "@angular/router";
import {UserPage} from "./view/user/user.page";
import {UserService} from "./service/User.service";



const routes: Routes = [
    {
        path: '',
        redirectTo:'/home',
        pathMatch:'full'

    },{
        path: 'home',
        component: UserPage,
        children: [
            {
                path: 'user',
            }
        ]
    }
]


export const routingProviders: any[] = [UserService]

export const routing = RouterModule.forRoot(routes);