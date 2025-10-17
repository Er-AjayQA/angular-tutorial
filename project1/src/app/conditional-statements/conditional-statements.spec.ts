import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalStatements } from './conditional-statements';

describe('ConditionalStatements', () => {
  let component: ConditionalStatements;
  let fixture: ComponentFixture<ConditionalStatements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalStatements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalStatements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
