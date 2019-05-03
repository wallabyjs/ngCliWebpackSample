import {Observable} from 'rxjs';


const map = v => v;

class Test {
  constructor() {
    this.test();
  }

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
  new Test()
});
