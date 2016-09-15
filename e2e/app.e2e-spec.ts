import { NgCliWebpackSample14Page } from './app.po';

describe('ng-cli-webpack-sample14 App', function() {
  let page: NgCliWebpackSample14Page;

  beforeEach(() => {
    page = new NgCliWebpackSample14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
