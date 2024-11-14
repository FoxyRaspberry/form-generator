import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  imports: [FormsModule],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestNumberComponent),
    },
  ],
  selector: 'app-test-number',
  standalone: true,
  styleUrl: './test-number.component.scss',
  templateUrl: './test-number.component.html',
})
export class TestNumberComponent implements ControlValueAccessor {
  protected disabled = false;

  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};
  private numericValueInternal: number = 0;

  protected get value(): number {
    return this.numericValueInternal;
  }

  protected set value(value: number) {
    this.writeValue(value);
  }

  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  public writeValue(value: number | null): void {
    if (value === null) {
      return;
    }

    this.numericValueInternal = value;
    this.onChange(this.numericValueInternal);
  }
}
