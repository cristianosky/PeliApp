import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmaterialComponent } from './modalmaterial.component';

describe('ModalmaterialComponent', () => {
  let component: ModalmaterialComponent;
  let fixture: ComponentFixture<ModalmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
