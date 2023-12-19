import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphacodeFormsComponent } from './alphacode-forms.component';

describe('AlphacodeFormsComponent', () => {
  let component: AlphacodeFormsComponent;
  let fixture: ComponentFixture<AlphacodeFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlphacodeFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlphacodeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
