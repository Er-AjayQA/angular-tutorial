import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getset } from './getset';

describe('Getset', () => {
  let component: Getset;
  let fixture: ComponentFixture<Getset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getset]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
