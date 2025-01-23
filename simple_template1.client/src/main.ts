import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app/app.routes';


platformBrowserDynamic().bootstrapModule(AppRoutingModule)
  .catch(err => console.error(err));
