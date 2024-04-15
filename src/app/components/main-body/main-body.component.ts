import { Component } from '@angular/core';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [ContactUsComponent],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {

}
