import { Routes } from '@angular/router';
import { HomrComponent } from './pages/homr/homr.component';
import { SpaComponent } from './pages/spa/spa.component';
import { MassageComponent } from './pages/massage/massage.component';
import { SpaCityComponent } from './pages/spa-city/spa-city.component';
import { MassageCityComponent } from './pages/massage-city/massage-city.component';

export const routes: Routes = [
    { path: "", component: HomrComponent},
    { path: "spa", component: SpaComponent},
    {path:"spa/:city", component: SpaCityComponent},
    { path: "massage", component: MassageComponent },
    {path: "massage/:city", pathMatch:"full", component: MassageCityComponent }
   
];
