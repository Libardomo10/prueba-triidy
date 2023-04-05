import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapApplication(AppComponent, {
//   providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation())],
// }).catch((err) => console.error(err));



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));