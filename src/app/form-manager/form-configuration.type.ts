export type FormConfigurationItem =
| FormCheckboxConfiguration
| FormDropdownListConfiguration
| FormInputNumberConfiguration
| FormTextboxConfiguration;

interface FormTextboxConfiguration {
  readonly id: string;
  readonly kind: 'textbox';
  readonly parameters: FormTextboxConfigurationParameters;
  readonly value: string;
}

interface FormTextboxConfigurationParameters {
  readonly description: string;
  readonly label: string;
  readonly required: boolean;
}


interface FormCheckboxConfiguration {
  readonly id: string;
  readonly kind: 'checkbox';
  readonly parameters: FormCheckboxConfigurationParameters;
  readonly value: boolean;
}

interface FormCheckboxConfigurationParameters {
  readonly description: string;
  readonly label: string;
  readonly required: boolean;
}


interface FormInputNumberConfiguration {
  readonly id: string;
  readonly kind: 'inputNumber';
  readonly parameters: FormInputNumberConfigurationParameters;
  readonly value: number;
}

interface FormInputNumberConfigurationParameters {
  readonly description: string;
  readonly label: string;
  readonly required: boolean;
}


interface FormDropdownListConfiguration {
  readonly id: string;
  readonly kind: 'dropdownList';
  readonly parameters: FormDropdownListConfigurationParameters;
  readonly value: string;
}

interface FormDropdownListConfigurationParameters {
  readonly description: string;
  readonly label: string;
  readonly options: readonly FormDropdownListConfigurationParametersOption[];
  readonly required: boolean;
}

interface FormDropdownListConfigurationParametersOption {
  readonly title: string;
  readonly value: string;
}
