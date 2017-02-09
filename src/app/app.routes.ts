import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent } 
];

export const appRouterProviders = RouterModule.forRoot(routes);

