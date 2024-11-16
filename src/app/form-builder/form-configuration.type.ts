export type FormConfigurationItem =
| FormCheckboxConfiguration
| FormDropdownListConfiguration
| FormInputNumberConfiguration
| FormTextboxConfiguration;

interface FormTextboxConfiguration {
  readonly id: string;
  readonly kind: 'textbox';
  readonly parameters: FormTextboxConfigurationParameters;
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
