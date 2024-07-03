import { Component } from '@angular/core';
import { PanelInicioComponent } from '../components/panel-inicio/panel-inicio.component';

@Component({
  selector: 'app-choose-blog',
  standalone: true,
  imports: [PanelInicioComponent],
  templateUrl: './choose-blog.component.html',
  styleUrl: './choose-blog.component.css'
})
export class ChooseBlogComponent {

}
