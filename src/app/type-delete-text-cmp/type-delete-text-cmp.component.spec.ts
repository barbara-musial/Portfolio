import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeleteTextCmpComponent } from './type-delete-text-cmp.component';

describe('TypeDeleteTextCmpComponent', () => {
  let component: TypeDeleteTextCmpComponent;
  let fixture: ComponentFixture<TypeDeleteTextCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeDeleteTextCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeDeleteTextCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
