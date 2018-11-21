import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { SearchResultComponent } from '../components/search-result/search-result.component';
import { AboutComponent } from '../components/about/about.component';

const routes: Routes = [
    { path: '', component: SearchResultComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
