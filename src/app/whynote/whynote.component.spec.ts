import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhynoteComponent } from './whynote.component';

describe('WhynoteComponent', () => {
  let component: WhynoteComponent;
  let fixture: ComponentFixture<WhynoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhynoteComponent]
    });
    fixture = TestBed.createComponent(WhynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
