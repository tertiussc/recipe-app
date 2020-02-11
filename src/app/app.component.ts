import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedContent = 'recipe'

  onNavigate(content: string) {
    this.loadedContent = content
  }

}
