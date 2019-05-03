import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Observable} from 'rxjs';


const map = v => v;

class Test {
  private returnUndefined(): Observable<any> {
    return undefined;
  }

  // Function under test: passes in Wallaby
  public test(): Observable<any> {
    return this.returnUndefined().pipe(
      map(val => {
        return val;
      })
    );
  }
}

it('issue 2063', () => {
  new Test().test()
});
