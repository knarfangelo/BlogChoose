import { CUSTOM_ELEMENTS_SCHEMA, Component, signal } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { IWebProgramacion } from '../../DataBase/Interfaces/IWebProgramacion';
import { dbWebProgramacion } from '../../DataBase/dbWebProgramacion';
import { SwiperOptions } from 'swiper/types';
import { dbLeyOlvido } from '../../DataBase/dbLeyOlvido';
import { ILeyOlvido } from '../../DataBase/Interfaces/ILeyOlvido';
import { IContenidoDigital } from '../../DataBase/Interfaces/IContenidoDigital';
import { dbContenidoDigital } from '../../DataBase/dbContenidoDigital';
register();

@Component({
  selector: 'app-contenido-digital',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  template: `<header>
  <h2 class="titulo" id="contenido-digital">Contenido Digital</h2>
    <swiper-container init=false class="swiper-contenido-digital">
      @for (item of swiperObjects; track $index) {
      <swiper-slide style="background-image: url({{item.img}});">
          <div class="slide-custom" >
            <h3>{{ item.title }}</h3>
            <p class="parrafo1">{{ item.etiquetas.join(' | ') }}</p>
            <p class="parrafo2">{{ item.fecha }}</p>
          </div>
      </swiper-slide>
    }
    </swiper-container>
</header>`,
  styleUrl: './contenido-digital.component.css'
})
export class ContenidoDigitalComponent {
  
  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects:IContenidoDigital[]  = dbContenidoDigital;

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-contenido-digital');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 3,
      speed: 3000,
      breakpoints: {
        0:{
          slidesPerView:3,
        },
      },
      spaceBetween:25,
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }
  
}
