import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  count = 0;
  clickMessage = this.count + ' clicks!';

  onClick(event: any) {
    console.log(event);
    this.clickMessage = this.count++ + ' clicks!';
  }
}
