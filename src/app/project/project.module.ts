import { NgModule } from '@angular/core';

import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectOverviewComponent, ProjectDetailComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProjectOverviewComponent, ProjectDetailComponent]
})
export class ProjectModule {}
