import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofoleComponent } from './portofole.component';

describe('PortofoleComponent', () => {
  let component: PortofoleComponent;
  let fixture: ComponentFixture<PortofoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortofoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
