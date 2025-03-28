import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/parent-child/home/home.component';
import { AboutUsComponent } from './components/parent-child/about-us/about-us.component';
import { ContactUsComponent } from './components/parent-child/contact-us/contact-us.component';
import { NgContainerTemplateComponent } from './components/ng-container-template/ng-container-template.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'template-form',
    component: TemplateFormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'container',
    component: NgContainerTemplateComponent,
  },
  {
    path: '**', // Wildcard component
    redirectTo: '/settings',
  },
];
