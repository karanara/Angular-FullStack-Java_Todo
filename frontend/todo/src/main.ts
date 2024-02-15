import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

// Ensure that HttpClientModule is imported in the appropriate Angular module.

bootstrapApplication(AppComponent, appConfig,) // Pass HttpClientModule as a parameter
  .catch((err) => console.error(err));
