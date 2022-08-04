import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatoUpdateComponent } from './zapato-update.component';

describe('ZapatoUpdateComponent', () => {
  let component: ZapatoUpdateComponent;
  let fixture: ComponentFixture<ZapatoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapatoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapatoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
