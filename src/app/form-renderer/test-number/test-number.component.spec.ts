import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestNumberComponent } from './test-number.component';

describe('TestNumberComponent', (): void => {
  let component: TestNumberComponent;
  let fixture: ComponentFixture<TestNumberComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [TestNumberComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
