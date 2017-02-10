import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';

const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent}
];

export const appRouterProviders = RouterModule.forRoot(routes);

