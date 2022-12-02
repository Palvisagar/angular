import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http';


if (environment.production) {
  enableProdMode();
}

export function baseurl(){

  return"http://student.gulati.Ksesystem.com/public/api/";

}

const provider = [
  {
    provide: 'baseurl', useFactory:baseurl, deps:[]
  }
]

platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
