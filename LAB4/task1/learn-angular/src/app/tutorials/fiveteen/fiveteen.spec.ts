import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiveteen } from './fiveteen';

describe('Fiveteen', () => {
  let component: Fiveteen;
  let fixture: ComponentFixture<Fiveteen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fiveteen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fiveteen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
