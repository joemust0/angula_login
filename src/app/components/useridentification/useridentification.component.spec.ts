import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseridentificationComponent } from './useridentification.component';

describe('UseridentificationComponent', () => {
  let component: UseridentificationComponent;
  let fixture: ComponentFixture<UseridentificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseridentificationComponent]
    });
    fixture = TestBed.createComponent(UseridentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
