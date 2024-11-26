import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPlatosComponent } from './formulario-platos.component';

describe('FormularioPlatosComponent', () => {
  let component: FormularioPlatosComponent;
  let fixture: ComponentFixture<FormularioPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPlatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
