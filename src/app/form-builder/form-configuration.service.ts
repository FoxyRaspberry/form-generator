import { Injectable } from '@angular/core';
import type { FormConfigurationItem } from './form-configuration.type';
import { of, type Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormConfigurationService {
  public readConfiguration(): Observable<readonly FormConfigurationItem[]> {
    return of(formConfigurationExample);
  }
}

const formConfigurationExample: readonly FormConfigurationItem[] = [
  {
    id: 'qw',
    kind: 'inputNumber',
    parameters: {
      description: '',
      label: 'la',
      required: false,
    },
  },
  {
    id: 'qw1',
    kind: 'inputNumber',
    parameters: {
      description: 'desr',
      label: 'la',
      required: true,
    },
  },
  {
    id: 'qw2',
    kind: 'dropdownList',
    parameters: {
      description: '',
      label: 'la',
      required: false,
      options: [
        {
          title: 'Leningrad',
          value: 'SPB',
        },
        {
          title: 'Moskva',
          value: 'MSK',
        },
        {
          title: 'Beograd',
          value: 'BEG',
        },
        {
          title: 'Antalya',
          value: 'ANT',
        },
      ],
    },
  },
  {
    id: 'qw3',
    kind: 'dropdownList',
    parameters: {
      description: 'desr',
      label: 'la',
      required: true,
      options: [
        {
          title: 'Leningrad',
          value: 'SPB',
        },
        {
          title: 'Moskva',
          value: 'MSK',
        },
        {
          title: 'Beograd',
          value: 'BEG',
        },
        {
          title: 'Antalya',
          value: 'ANT',
        },
      ],
    },
  },
  {
    id: 'qw4',
    kind: 'textbox',
    parameters: {
      description: '',
      label: 'la',
      required: false,
    },
  },
  {
    id: 'qw5',
    kind: 'textbox',
    parameters: {
      description: 'desr',
      label: 'la',
      required: true,
    },
  },
  {
    id: 'qw6',
    kind: 'checkbox',
    parameters: {
      description: '',
      label: 'la',
      required: false,
    },
  },
  {
    id: 'qw7',
    kind: 'checkbox',
    parameters: {
      description: 'desr',
      label: 'la',
      required: true,
    },
  },
];
