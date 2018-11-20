import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
