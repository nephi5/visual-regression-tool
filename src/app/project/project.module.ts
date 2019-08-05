import { NgModule } from '@angular/core';

import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProjectOverviewComponent, ProjectDetailComponent],
  imports: [MatCardModule, MatListModule, MatDividerModule, CommonModule],
  exports: [ProjectOverviewComponent, ProjectDetailComponent]
})
export class ProjectModule {}
