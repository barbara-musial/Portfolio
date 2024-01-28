import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyTooltipComponent } from './copy-tooltip.component';

describe('CopyTooltipComponent', () => {
  let component: CopyTooltipComponent;
  let fixture: ComponentFixture<CopyTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyTooltipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopyTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
