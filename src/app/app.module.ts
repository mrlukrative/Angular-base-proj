import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: FormValidationComponent },
  { path: 'form-validation', component: FormValidationComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'dynamic-form', component: DynamicFormComponent },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    ReactiveFormComponent,
    DynamicFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
