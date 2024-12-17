import { Routes } from '@angular/router';
import { FormConfigurationEditorComponent } from './form-manager/form-configuration-editor/form-configuration-editor.component';
import { FormBuilderComponent } from './form-renderer/form-builder/form-builder.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
  { path: '',   component: MainPageComponent },
  { path: 'form-configuration-editor', component: FormConfigurationEditorComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: '**', component: NotFoundPageComponent },
];
