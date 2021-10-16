import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTlComponent } from './child-tl.component';

describe('ChildTlComponent', () => {
  let component: ChildTlComponent;
  let fixture: ComponentFixture<ChildTlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
