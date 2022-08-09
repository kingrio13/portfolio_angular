import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWorksComponent } from './sample-works.component';

describe('SampleWorksComponent', () => {
  let component: SampleWorksComponent;
  let fixture: ComponentFixture<SampleWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
