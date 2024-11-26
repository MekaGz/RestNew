import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMozosComponent } from './formulario-mozos.component';

describe('FormularioMozosComponent', () => {
  let component: FormularioMozosComponent;
  let fixture: ComponentFixture<FormularioMozosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMozosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMozosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
