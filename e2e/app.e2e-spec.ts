import { NgCliWebpackSample24Page } from './app.po';

describe('ng-cli-webpack-sample24 App', function() {
  let page: NgCliWebpackSample24Page;

  beforeEach(() => {
    page = new NgCliWebpackSample24Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
