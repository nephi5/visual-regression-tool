import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildOverivewComponent } from './build-overivew/build-overivew.component';

const routes: Routes = [{ path: '', component: BuildOverivewComponent }];

@NgModule({
  declarations: [BuildOverivewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BuildModule {}
