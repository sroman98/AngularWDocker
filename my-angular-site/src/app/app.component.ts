import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <h2>
        We love pizza.
      </h2>
      <span style="display: block">{{ title }} app is running! Finally!</span>
      <br>
      <img width="300" alt="Logo" src="assets/cat.jpg">
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
