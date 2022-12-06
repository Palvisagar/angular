import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraducationComponent } from './graducation.component';

describe('GraducationComponent', () => {
  let component: GraducationComponent;
  let fixture: ComponentFixture<GraducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
