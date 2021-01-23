import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [{path: 'users', component: UsersComponent, children: [
{path: ':id/:name', component: UserComponent}
]},
{path: 'servers', canActivateChild: [AuthGuard],
//canActivate: [AuthGuard],
component: ServersComponent, children: [
{path: ':id', component: ServerComponent},
{path: ':id/edit', component: EditServerComponent}
]},
{path: '', component: HomeComponent},
{path: 'not-found', component: PageComponent},
{path: '**', redirectTo: '/not-found'}];

@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
