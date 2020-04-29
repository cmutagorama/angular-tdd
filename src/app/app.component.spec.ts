import {
  TestBed,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, AlertButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = de.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have alert button component', async(() => {
    const compiled = de.nativeElement;
    expect(compiled.querySelector('app-alert-button')).not.toBe(null);
  }));
});
