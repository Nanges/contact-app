import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFieldsComponent } from './contact-fields.component';

describe('ContactFieldsComponent', () => {
  let component: ContactFieldsComponent;
  let fixture: ComponentFixture<ContactFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
