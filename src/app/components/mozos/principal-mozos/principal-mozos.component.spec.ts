import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMozosComponent } from './principal-mozos.component';

describe('PrincipalMozosComponent', () => {
  let component: PrincipalMozosComponent;
  let fixture: ComponentFixture<PrincipalMozosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalMozosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalMozosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
