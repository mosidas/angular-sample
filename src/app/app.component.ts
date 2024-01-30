import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { TitleComponent } from './title/title.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateModule } from './translate/translate.module';
import { environmentLang } from '../environments/environment.lang';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MenuComponent,
    MainComponent,
    TitleComponent,
    ChartComponent,
    TableComponent,
    AppTranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang-test3';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['ja', 'en']);
    const defaultLang = environmentLang.language;
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
    // const browserLang = navigator.language.split('-')[0]; // ブラウザの言語設定を取得
    // console.log('browserLang: ' + browserLang);
    // console.log('translate.getLangs(): ' + this.translate.getLangs());
    // const defaultLang = 'en'; // デフォルトの言語
    // this.translate.setDefaultLang(defaultLang);
    // this.translate.use(
    //   this.translate.getLangs().includes(browserLang)
    //     ? browserLang
    //     : defaultLang
    // );
  }
}
