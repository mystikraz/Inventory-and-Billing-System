import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcontrolComponent } from './contentcontrol.component';

describe('ContentcontrolComponent', () => {
  let component: ContentcontrolComponent;
  let fixture: ComponentFixture<ContentcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
