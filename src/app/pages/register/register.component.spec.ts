import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraseComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegistraseComponent;
  let fixture: ComponentFixture<RegistraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistraseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
