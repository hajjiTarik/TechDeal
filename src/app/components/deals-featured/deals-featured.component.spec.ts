import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsFeaturedComponent } from './deals-featured.component';

describe('DealsFeaturedComponent', () => {
  let component: DealsFeaturedComponent;
  let fixture: ComponentFixture<DealsFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
