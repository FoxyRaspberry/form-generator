import { Component, DestroyRef, inject, type OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { FormConfigurationService } from '../form-configuration.service';

@Component({
  imports: [FormsModule],
  selector: 'app-form-configuration-editor',
  standalone: true,
  styleUrl: './form-configuration-editor.component.scss',
  templateUrl: './form-configuration-editor.component.html',
})
export class FormConfigurationEditorComponent implements OnInit {
  protected formConfigurationJSON = '';

  private readonly destroyRef = inject(DestroyRef);

  constructor (private readonly formConfigurationService: FormConfigurationService) {}

  public ngOnInit(): void {
    this.formConfigurationService.readConfiguration()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((formConfiguration): void => {
      this.formConfigurationJSON = JSON.stringify(formConfiguration, null, 2);
    });
  }

  protected buttonClickHandler(): void {
    try {
      const formConfiguration = JSON.parse(this.formConfigurationJSON);
      this.formConfigurationService.setConfiguration(formConfiguration);
    } catch (error) {
      alert('Не удалось распознать конфигурацию. Исправьте JSON.');
    }
  }
}
