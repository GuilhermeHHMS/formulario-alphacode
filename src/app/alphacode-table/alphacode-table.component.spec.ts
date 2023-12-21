import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphacodeTableComponent } from './alphacode-table.component';

describe('AlphacodeTableComponent', () => {
  let component: AlphacodeTableComponent;
  let fixture: ComponentFixture<AlphacodeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlphacodeTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlphacodeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
