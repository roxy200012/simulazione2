import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageControllerComponent } from './homepage-controller.component';

describe('HomepageControllerComponent', () => {
  let component: HomepageControllerComponent;
  let fixture: ComponentFixture<HomepageControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
