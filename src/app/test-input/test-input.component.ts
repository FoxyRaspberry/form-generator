import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  imports: [FormsModule],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestInputComponent),
    },
  ],
  selector: 'app-test-input',
  standalone: true,
  styleUrl: './test-input.component.scss',
  templateUrl: './test-input.component.html',
})
export class TestInputComponent implements ControlValueAccessor {
  @Input() public description = '';
  @Input({ required: true }) public label = '';
  @Input() public required = false;

  protected disabled = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private valueInternal = '';

  protected get value(): string {
    return this.valueInternal;
  }

  protected set value(value: string) {
    this.writeValue(value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  public writeValue(value: string | null): void {
    if (value === null) {
      return;
    }

    this.valueInternal = value;
    this.onChange(this.valueInternal);
  }
}
