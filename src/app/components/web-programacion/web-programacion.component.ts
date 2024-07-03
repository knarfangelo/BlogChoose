import { CUSTOM_ELEMENTS_SCHEMA, Component, signal } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { IWebProgramacion } from '../../DataBase/Interfaces/IWebProgramacion';
import { dbWebProgramacion } from '../../DataBase/dbWebProgramacion';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-web-programacion',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  template: `<header>
  <h2 class="titulo">WEB Y PROGRAMACION</h2>
    <swiper-container init=false class="swiper-web-programacion">
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
  styleUrl: './web-programacion.component.css'
})
export class WebProgramacionComponent {
  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects:IWebProgramacion[]  = dbWebProgramacion;

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-web-programacion');
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
