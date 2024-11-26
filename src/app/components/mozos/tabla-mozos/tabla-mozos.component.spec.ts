import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMozosComponent } from './tabla-mozos.component';

describe('TablaMozosComponent', () => {
  let component: TablaMozosComponent;
  let fixture: ComponentFixture<TablaMozosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaMozosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMozosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
