import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //funcion para activar fondo seccion con el click
  setActiveClass(event: Event) {
    const target = event.target as HTMLElement;
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
      link.classList.remove('active');
    });
    if (target.tagName !== 'IMG') { // Verificamos si el objetivo no es la imagen del logo
      target.classList.add('active');
    }
  }
}
