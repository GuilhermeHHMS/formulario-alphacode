import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphacodeFlatButtonComponent } from './alphacode-flat-button.component';

describe('AlphacodeFlatButtonComponent', () => {
  let component: AlphacodeFlatButtonComponent;
  let fixture: ComponentFixture<AlphacodeFlatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlphacodeFlatButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlphacodeFlatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
