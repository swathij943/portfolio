import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  image?: string
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<Project[]>('assets/projects.json')
      .subscribe(ps => this.projects = ps);
  }
}
