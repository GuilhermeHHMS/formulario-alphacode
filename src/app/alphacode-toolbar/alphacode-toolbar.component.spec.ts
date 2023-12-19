import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphacodeToolbarComponent } from './alphacode-toolbar.component';

describe('AlphacodeToolbarComponent', () => {
  let component: AlphacodeToolbarComponent;
  let fixture: ComponentFixture<AlphacodeToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlphacodeToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlphacodeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
