import { Component } from '@angular/core';
import { PanelInicioComponent } from '../components/panel-inicio/panel-inicio.component';
import { WebProgramacionComponent } from '../components/web-programacion/web-programacion.component';
import { LeyOlvidoComponent } from '../components/ley-olvido/ley-olvido.component';
import { ContenidoDigitalComponent } from '../components/contenido-digital/contenido-digital.component';

@Component({
  selector: 'app-choose-blog',
  standalone: true,
  imports: [PanelInicioComponent, WebProgramacionComponent, LeyOlvidoComponent, ContenidoDigitalComponent],
  templateUrl: './choose-blog.component.html',
  styleUrl: './choose-blog.component.css'
})
export class ChooseBlogComponent {

}
