import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsCompnent } from './signals-compnent';

describe('SignalsCompnent', () => {
  let component: SignalsCompnent;
  let fixture: ComponentFixture<SignalsCompnent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsCompnent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsCompnent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
