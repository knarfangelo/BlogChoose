import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChooseBlogComponent } from './choose-blog/choose-blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChooseBlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlogChooseDemo';
}
