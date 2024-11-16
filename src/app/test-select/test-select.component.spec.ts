import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestSelectComponent } from './test-select.component';

describe('TestSelectComponent', (): void => {
  let component: TestSelectComponent;
  let fixture: ComponentFixture<TestSelectComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [TestSelectComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
