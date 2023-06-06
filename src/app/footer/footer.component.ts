import { Component } from '@angular/core';
import { STUDIES } from '../app-routesNames';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  studiesRoute:string = STUDIES;
}
