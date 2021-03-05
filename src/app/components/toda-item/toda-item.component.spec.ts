import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaItemComponent } from './toda-item.component';

describe('TodaItemComponent', () => {
  let component: TodaItemComponent;
  let fixture: ComponentFixture<TodaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
