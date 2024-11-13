import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  imports: [FormsModule],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestSelectComponent),
    },
  ],
  selector: 'app-test-select',
  standalone: true,
  styleUrl: './test-select.component.scss',
  templateUrl: './test-select.component.html',
})
export class TestSelectComponent implements ControlValueAccessor {
  @Input({ required: true }) public options: readonly TestSelectOption[] = [];

  protected disabled = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private selectedOption: TestSelectOption = {
    title: 'No data',
    value: 'No data',
  };

  protected get value(): string {
    return this.selectedOption.value;
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
    if (!value) {
      return;
    }
    const selectedElement = this.options.find(element => element.value === value);
    if (selectedElement) {
      this.selectedOption = selectedElement;
      this.onChange(this.selectedOption.value);
    }
  }
}

interface TestSelectOption {
  readonly title: string;
  readonly value: string;
}
