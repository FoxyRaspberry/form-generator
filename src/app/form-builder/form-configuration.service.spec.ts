import { TestBed } from '@angular/core/testing';
import { FormConfigurationService } from './form-configuration.service';

describe('FormConfigurationService', (): void => {
  let service: FormConfigurationService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormConfigurationService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
