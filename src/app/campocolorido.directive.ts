import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCampocolorido]'
})
export class CampocoloridoDirective {

  constructor(
    private elementRef:ElementRef
  ) { }

}
