import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleApiComponent } from './simple-api.component';

describe('SimpleApiComponent', () => {
  let component: SimpleApiComponent;
  let fixture: ComponentFixture<SimpleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
