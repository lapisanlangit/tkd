import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanwilComponent } from './kanwil.component';

describe('KanwilComponent', () => {
  let component: KanwilComponent;
  let fixture: ComponentFixture<KanwilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanwilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanwilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
