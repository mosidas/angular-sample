import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe(
      (lang) => (this.currentLang = lang.lang)
    );
  }
}
