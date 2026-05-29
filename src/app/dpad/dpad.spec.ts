import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dpad } from './dpad';

describe('Dpad', () => {
  let component: Dpad;
  let fixture: ComponentFixture<Dpad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dpad],
    }).compileComponents();

    fixture = TestBed.createComponent(Dpad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
