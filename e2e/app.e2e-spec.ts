import { NgCliWebpackSample31Page } from './app.po';

describe('ng-cli-webpack-sample31 App', function() {
  let page: NgCliWebpackSample31Page;

  beforeEach(() => {
    page = new NgCliWebpackSample31Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
