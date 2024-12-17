import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', (): void => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
