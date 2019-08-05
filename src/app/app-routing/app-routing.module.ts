import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { ProjectComponent } from '../project/project.component';
import { ProjectOverviewComponent } from '../project/project-overview/project-overview.component';
import { ProjectDetailComponent } from '../project/project-detail/project-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {
    path: 'project',
    component: ProjectOverviewComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'project/:id/build/:id',
    loadChildren: () =>
      import('../comparison-tool/comparison-tool.module').then(
        m => m.ComparisonToolModule
      )
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})
export class AppRoutingModule {}
