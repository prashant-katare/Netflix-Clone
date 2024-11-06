import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        component: HomeComponent, 
        path: ""
    },
    {
        component: HomeComponent, 
        path: "home"
    },
    // {
    //   path: 'product/:id', component: ProductComponent,
    //   children: [
    //     {path: '', redirectTo:'updates', pathMatch:'full'},
    //     { path: 'offers', component: ProductOfferComponent },
    //     { path: 'updates', component: ProductUpdatesComponent }
    //   ]
    // },
    // { path: 'about', component: AboutComponent, 
    //   children: [
    //     {path: 'rating', outlet:'rate', component:RatingComponent},
    //     {path: 'feedback', outlet:'feed', component:FeedbackComponent}
    //   ]
    // }
];
