import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphacodeCheckboxComponent } from './alphacode-checkbox.component';

describe('AlphacodeCheckboxComponent', () => {
  let component: AlphacodeCheckboxComponent;
  let fixture: ComponentFixture<AlphacodeCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlphacodeCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlphacodeCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
