import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { By } from "@angular/platform-browser";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement.query(By.css('h1'));//?
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
