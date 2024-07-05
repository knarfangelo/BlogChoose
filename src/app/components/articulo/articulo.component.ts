import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { IWebProgramacion } from '../../DataBase/Interfaces/IWebProgramacion';
import { dbWebProgramacion } from '../../DataBase/dbWebProgramacion';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-articulo',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  
}
