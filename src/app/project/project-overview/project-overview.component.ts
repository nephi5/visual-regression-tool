import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  public projects$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.projects$ = this.getProjects().pipe(tap(next => console.log(next)));
  }

  getProjects(): Observable<any> {
    return this.http.get('api/project/all');
  }

  addNewProject(projectName: string) {
    console.log('projectName', projectName);
    this.http
      .post('api/project', { projectName })
      .subscribe(next => console.log(next));
  }
}
