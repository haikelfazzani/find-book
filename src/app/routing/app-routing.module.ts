import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchResultComponent } from '../components/search-result/search-result.component';

const routes: Routes = [
    { path: '', component: SearchResultComponent },
    { path: '**', redirectTo:'/' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
