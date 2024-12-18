import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TolvagoComponent } from './tolvago.component';

describe('TolvagoComponent', () => {
  let component: TolvagoComponent;
  let fixture: ComponentFixture<TolvagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TolvagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TolvagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
