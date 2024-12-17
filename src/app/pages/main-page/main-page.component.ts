import { Component } from '@angular/core';
import { FormConfigurationEditorComponent } from '../../form-manager/form-configuration-editor/form-configuration-editor.component';
import { FormBuilderComponent } from '../../form-renderer/form-builder/form-builder.component';

@Component({
  imports: [FormConfigurationEditorComponent, FormBuilderComponent],
  selector: 'app-main-page',
  standalone: true,
  styleUrl: './main-page.component.scss',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {}
