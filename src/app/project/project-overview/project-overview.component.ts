import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getProjects() {
    this.http.get('api/project/all').subscribe(res => console.log(res));
  }
}
