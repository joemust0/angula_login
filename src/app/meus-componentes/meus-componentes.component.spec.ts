import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusComponentesComponent } from './meus-componentes.component';

describe('MeusComponentesComponent', () => {
  let component: MeusComponentesComponent;
  let fixture: ComponentFixture<MeusComponentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeusComponentesComponent]
    });
    fixture = TestBed.createComponent(MeusComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
