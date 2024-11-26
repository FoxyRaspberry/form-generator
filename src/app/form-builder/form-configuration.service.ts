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
    value: 1,
  },
  {
    id: 'qw1',
    kind: 'inputNumber',
    parameters: {
      description: 'desr',
      label: 'la',
      required: true,
    },
    value: 2,
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
    value: 'SPB',
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
    value: 'BEG',
  },
  {
    id: 'qw4',
    kind: 'textbox',
    parameters: {
      description: '',
      label: 'la',
      required: false,
    },
    value: 'Имя',
  },
  {
    id: 'qw5',
    kind: 'textbox',
    parameters: {
      description: 'desr',
      label: 'la',
      required: true,
    },
    value: 'Имя2',
  },
  {
    id: 'qw6',
    kind: 'checkbox',
    parameters: {
      description: '',
      label: 'la',
      required: false,
    },
    value: false,
  },
  {
    id: 'qw7',
    kind: 'checkbox',
    parameters: {
      description: 'desr',
      label: 'la',
      required: true,
    },
    value: false,
  },
];
