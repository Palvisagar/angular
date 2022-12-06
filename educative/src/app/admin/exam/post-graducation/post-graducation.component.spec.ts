import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGraducationComponent } from './post-graducation.component';

describe('PostGraducationComponent', () => {
  let component: PostGraducationComponent;
  let fixture: ComponentFixture<PostGraducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostGraducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostGraducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
