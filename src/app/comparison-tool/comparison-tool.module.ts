import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComparisonToolOverviewComponent } from './comparison-tool-overview/comparison-tool-overview.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ComparisonToolOverviewComponent
  }
];

@NgModule({
  declarations: [ComparisonToolOverviewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ComparisonToolModule {}
