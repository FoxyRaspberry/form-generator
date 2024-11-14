import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestCheckboxComponent } from './test-checkbox.component';

describe('TestCheckboxComponent', (): void => {
  let component: TestCheckboxComponent;
  let fixture: ComponentFixture<TestCheckboxComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [TestCheckboxComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
