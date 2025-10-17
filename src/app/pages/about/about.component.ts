import { Component } from '@angular/core';
import {
  faJs,
  faJava,
  faPython,
  faAngular,
  faReact,
  faNodeJs,
  faAws,
  faDocker,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  techs = [
    { name: 'JavaScript', icon: faJs },
    { name: 'Java', icon: faJava },
    { name: 'Python', icon: faPython },
    { name: 'Angular', icon: faAngular },
    { name: 'React.js', icon: faReact },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'AWS', icon: faAws },
    { name: 'Docker', icon: faDocker },
    { name: 'GitHub', icon: faGithub },
    // Text-only fallback
    { name: 'PostgreSQL', icon: null },
    { name: 'MySQL', icon: null },
    { name: 'Express.js', icon: null },
    { name: 'Spring Boot', icon: null },
    { name: 'jQuery', icon: null },
    { name: 'RESTful APIs', icon: null },
    { name: 'Microservices', icon: null },
    { name: 'Responsive Web Design', icon: null },
    { name: 'Cross-Browser Compatibility', icon: null },
    { name: 'CI/CD Pipelines', icon: null },
    { name: 'GitHub Actions', icon: null },
    { name: 'Jenkins', icon: null },
    { name: 'Agile (Scrum/Kanban)', icon: null },
    { name: 'Test-Driven Development (TDD)', icon: null },
    { name: 'Unit Testing (Junit, Mocha)', icon: null },
    { name: 'Debugging', icon: null },
    { name: 'Performance Optimization', icon: null },
    { name: 'IntelliJ', icon: null },
    { name: 'VS Code', icon: null },
    { name: 'Confluence', icon: null },
    { name: 'Wireframe', icon: null },
    { name: 'Postman', icon: null },
  ];
}
