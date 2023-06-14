import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampocolorido]',
  exportAs:'campoColorido'
})
export class CampocoloridoDirective {

  @Input('appCampocolorido') cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo : string;

   @HostListener('focus') colorir(){
    this.corDeFundo = this.cor
   }

   @HostListener('blur') descolorir(){
    this.corDeFundo = 'transparent'
   }

}
