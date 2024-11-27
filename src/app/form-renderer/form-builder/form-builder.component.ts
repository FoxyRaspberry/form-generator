import { Component, DestroyRef, inject, type OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TestCheckboxComponent } from '../test-checkbox/test-checkbox.component';
import { TestInputComponent } from '../test-input/test-input.component';
import { TestNumberComponent } from '../test-number/test-number.component';
import { TestSelectComponent } from '../test-select/test-select.component';
import { FormConfigurationService } from '../../form-manager/form-configuration.service';
import type { FormConfigurationItem } from '../../form-manager/form-configuration.type';

@Component({
  imports: [
    ReactiveFormsModule, 
    TestCheckboxComponent,
    TestInputComponent, 
    TestNumberComponent, 
    TestSelectComponent, 
  ],
  selector: 'app-form-builder',
  standalone: true,
  styleUrl: './form-builder.component.scss',
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent implements OnInit {
  protected readonly builtForm = new FormGroup({});

  protected formConfiguration: readonly FormConfigurationItem[] = [];

  private readonly destroyRef = inject(DestroyRef);

  constructor (private readonly formConfigurationService: FormConfigurationService) {}

  public ngOnInit(): void {
    const formConfigurationObservable = this.formConfigurationService.readConfiguration();
    formConfigurationObservable
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((formConfiguration: readonly FormConfigurationItem[]): void =>{
        this.formConfiguration = formConfiguration;

        formConfiguration.forEach((currentValue: FormConfigurationItem): void =>{
          const formControl = new FormControl(currentValue.value);
          this.builtForm.addControl(currentValue.id, formControl)
        });
      });
  }

  protected formSubmitHandler(): void {
    console.log(this.builtForm.value);
  }
}
