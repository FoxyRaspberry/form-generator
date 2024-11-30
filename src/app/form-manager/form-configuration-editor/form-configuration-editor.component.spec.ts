import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfigurationEditorComponent } from './form-configuration-editor.component';

describe('FormConfigurationEditorComponent', (): void => {
  let component: FormConfigurationEditorComponent;
  let fixture: ComponentFixture<FormConfigurationEditorComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [FormConfigurationEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConfigurationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
