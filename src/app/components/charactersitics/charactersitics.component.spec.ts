import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersiticsComponent } from './charactersitics.component';

describe('CharactersiticsComponent', () => {
  let component: CharactersiticsComponent;
  let fixture: ComponentFixture<CharactersiticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersiticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersiticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
