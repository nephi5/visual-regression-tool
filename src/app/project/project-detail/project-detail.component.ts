import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  public project$: Observable<any>;
  public builds$: Observable<any>;

  private projectId: string;

  ngOnInit() {
    this.route.params.subscribe(e => {
      const projectId = e['id'];
      console.log(e['id']);
      this.projectId = projectId;
      this.builds$ = this.getBuildsByProjectId(projectId);

      this.project$ = this.getProject(projectId);
    });
  }

  public addABuild() {
    this.http
      .post('api/build', { projectId: this.projectId })
      .subscribe(result => console.log(result));
  }

  public deleteBuild(buildId: string, event: Event) {
    event.stopPropagation();
    this.http.delete(`api/build?buildId=${buildId}`).subscribe(result => {
      this.builds$ = this.getBuildsByProjectId(this.projectId);
    });
  }

  private getProject(projectId: string): Observable<any> {
    return this.http.get(`api/project?id=${projectId}`);
  }

  private getBuildsByProjectId(projectId: string): Observable<any> {
    return this.http.get(`api/build?projectId=${projectId}`);
  }
}
