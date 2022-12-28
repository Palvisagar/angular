import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


export function baseurl(){

  return"http://localhost:4000/admin/";

}

const provider = [
  {
    provide: 'baseurl', useFactory:baseurl, deps:[]
  }
]

platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));

