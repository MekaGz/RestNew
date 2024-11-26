import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPlatosComponent } from './principal-platos.component';

describe('PrincipalPlatosComponent', () => {
  let component: PrincipalPlatosComponent;
  let fixture: ComponentFixture<PrincipalPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalPlatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
