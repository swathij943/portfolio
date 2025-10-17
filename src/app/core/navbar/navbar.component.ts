import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

//   isLight = false;

//   toggleTheme() {
//     this.isLight = !this.isLight;
//     if (this.isLight)
//  {
//   document.documentElement.classList.add('light');
//  }  else {
//   document.documentElement.classList.remove('light');
//  }
// }
isDarkMode = false;

ngOnInit() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    this.isDarkMode = true;
    document.documentElement.classList.add('dark');
  } else {
    this.isDarkMode = false;
    document.documentElement.classList.add('light');
  }
}

toggleTheme() {
  this.isDarkMode = !this.isDarkMode;

  if (this.isDarkMode) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

}
