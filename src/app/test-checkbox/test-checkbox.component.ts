import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestCheckboxComponent),
    },
  ],
  imports: [FormsModule],
  selector: 'app-test-checkbox',
  standalone: true,
  styleUrl: './test-checkbox.component.scss',
  templateUrl: './test-checkbox.component.html',
})
export class TestCheckboxComponent implements ControlValueAccessor {
  @Input() public description = '';
  @Input({ required: true }) public label = '';
  @Input() public required = false;

  protected disabled = false;

  private onChange: (value: boolean) => void = () => { };
  private onTouched: () => void = () => { };
  private booleanValueInternal: boolean = false;

  protected get value(): boolean {
    return this.booleanValueInternal;
  }

  protected set value(value: boolean) {
    this.writeValue(value);
  }

  public registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  public writeValue(value: boolean | null): void {
    if (value === null) {
      return;
    }

    this.booleanValueInternal = value;
    this.onChange(this.booleanValueInternal);
  }
}
