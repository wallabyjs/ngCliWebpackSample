import { AppComponent } from './app.component';
describe('AppComponent', () => {

  it('should work', (() => {
    new AppComponent().test({results: [{objectID: 1}]});
  }));
});
