import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilderComponent } from './form-renderer/form-builder/form-builder.component';
import { FormConfigurationEditorComponent } from './form-manager/form-configuration-editor/form-configuration-editor.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // TODO: Learn `RouterOutlet`.
    RouterOutlet,
    
    FormBuilderComponent,
    FormConfigurationEditorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
